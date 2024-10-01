import React, { useState, useRef, useEffect } from 'react';
import S from './Dropdown.styled';
import { useDebounce, useLogin, useOutsideClick } from '../../hooks';
import { useQuery } from '@tanstack/react-query';
import { getCourseKeyword, getProfessorKeyword } from '../../service';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { applicantFilter, recruitFilterState } from '../../atom';
import { ManageRole, Keyword } from '../../types';
import { DropdownArrowUp, DropdownArrow, Clear } from '../../assets';
import { useSearchParams } from 'react-router-dom';

interface Dropdown {
	data?: string[];
	initialData?: string;
	$showDropdown?: boolean;
	scope?: boolean;
	category?: boolean;
	applicant?: boolean;
	roleObj?: ManageRole[];
}

type keyObj = {
	[key: string]: number;
};

const scopeObj: keyObj = {
	'모든 범위': 0,
	교외: 1,
	교내: 2,
};

const categoryObj: keyObj = {
	'모든 유형': 0,
	프로젝트: 1,
	스터디: 2,
	공모전: 3,
};

const Dropdown = ({ data, initialData, scope, category, applicant, roleObj }: Dropdown) => {
	const [currentValue, setCurrentValue] = useState<string | undefined>(`${initialData}`);
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const [dropdown, setDropdown] = useState({
		course: false,
		professor: false,
	});
	const { isLogin } = useLogin();
	const [isScopeSelected, setIsScopeSelected] = useState(false);
	const [isCategorySelected, setIsCategorySelected] = useState(false);
	const insideRef = useRef<HTMLDivElement | null>(null);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [value, setValue] = useState({
		course: {
			name: '',
			id: null as number | null,
		},
		professor: {
			name: '',
			id: null as number | null,
		},
	});
	const setApplicantFilter = useSetRecoilState(applicantFilter);
	const keywordCourse = useDebounce(value.course.name, 500);
	const keywordProfessor = useDebounce(value.professor.name, 500);
	const [filterState, setFilterState] = useRecoilState(recruitFilterState);
	const [searchParams, setSearchParams] = useSearchParams();

	const { data: dataCourse, isLoading: isLoadingCourse } = useQuery({
		queryKey: ['searchCourse', keywordCourse],
		queryFn: () => getCourseKeyword(keywordCourse),
		enabled: !!(keywordCourse && isLogin),
		staleTime: Infinity,
		gcTime: Infinity,
	});
	const { data: dataProfessor, isLoading: isLoadingProfessor } = useQuery({
		queryKey: ['searchProfessor', keywordProfessor],
		queryFn: () => getProfessorKeyword(keywordProfessor),
		enabled: !!(keywordProfessor && isLogin),
		staleTime: Infinity,
		gcTime: Infinity,
	});

	const getKeyByValue = (obj: keyObj, value: number) => {
		return Object.keys(obj).find(key => obj[key] === value);
	};

	const onClickDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		setShowDropdown(prev => !prev);
	};

	const handleRadio = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	const onClickList = (event: React.MouseEvent<HTMLElement>, id?: number) => {
		event.stopPropagation();
		const { innerText } = event.target as HTMLElement;
		setCurrentValue(innerText);
		if (applicant && id) {
			setApplicantFilter(id);
		} else {
			if (innerText === '모든 유형') {
				searchParams.delete('category');
				setSearchParams(searchParams);
				setShowDropdown(false);
			} else {
				searchParams.set('category', categoryObj[innerText].toString());
				setSearchParams(searchParams);
			}
			setFilterState(prev => ({ ...prev, category: Number(searchParams.get('category')) }));
			setIsCategorySelected(true);
		}
		setShowDropdown(false);
	};

	const onClickRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.stopPropagation();
		const value = event.target.value;
		setCurrentValue(value);
		setFilterState(prev => ({ ...prev, scope: scopeObj[value] }));
		if (value !== '교내') {
			setShowDropdown(false);
		}
		if (value === '모든 범위') {
			searchParams.delete('scope');
			setSearchParams(searchParams);
			// return;
		} else {
			searchParams.set('scope', scopeObj[value].toString());
			setSearchParams(searchParams);
			setIsScopeSelected(true);
		}
	};

	const onClickCheckbox = () => {
		setIsChecked(prev => !prev);
	};

	const onClickCourse = (event: React.MouseEvent<HTMLSpanElement>) => {
		event.stopPropagation();
		const target = event.target as HTMLSpanElement;
		const { innerText, id } = target;
		setValue(prev => ({ ...prev, course: { name: innerText, id: Number(id) } }));
		setDropdown(prev => ({ ...prev, course: false }));
		searchParams.set('course', id);
	};
	const onClickProfessor = (event: React.MouseEvent<HTMLSpanElement>) => {
		const target = event.target as HTMLSpanElement;
		const { innerText, id } = target;
		setValue(prev => ({ ...prev, professor: { name: innerText, id: Number(id) } }));
		setDropdown(prev => ({ ...prev, professor: false }));
		searchParams.set('professor', id);
	};

	const onChangeCourse = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(prev => ({
			...prev,
			course: { ...prev.course, name: event.target.value },
		}));
	};
	const onChangeProfessor = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(prev => ({
			...prev,
			professor: { ...prev.professor, name: event.target.value },
		}));
	};
	const onClickClearInfo = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		setValue({
			course: {
				name: '',
				id: null as number | null,
			},
			professor: {
				name: '',
				id: null as number | null,
			},
		});
		setDropdown({ course: false, professor: false });
		setFilterState(prev => ({ ...prev, course: null, professor: null }));
		searchParams.delete('course');
		searchParams.delete('professor');
		setSearchParams(searchParams);
	};
	const submitInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		setDropdown({ course: false, professor: false });
		setFilterState(prev => ({ ...prev, course: value.course.id }));
		setFilterState(prev => ({ ...prev, professor: value.professor.id }));
		setSearchParams(searchParams);
		setShowDropdown(false);
	};
	const onClickInside = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	useOutsideClick(dropdownRef, showDropdown, setShowDropdown);
	useOutsideClick(insideRef, dropdown.course, () =>
		setDropdown(prev => ({ ...prev, course: false }))
	);
	useOutsideClick(insideRef, dropdown.professor, () =>
		setDropdown(prev => ({ ...prev, professor: false }))
	);

	useEffect(() => {
		if (scope && filterState.scope !== null) {
			setCurrentValue(getKeyByValue(scopeObj, filterState.scope));
			setIsScopeSelected(true);
		}
		if (scope && filterState.scope === null) {
			setCurrentValue('범위');
			setIsScopeSelected(false);
		}
	}, [filterState.scope, scope]);

	useEffect(() => {
		if (category && filterState.category !== null) {
			setCurrentValue(getKeyByValue(categoryObj, filterState.category));
			setIsCategorySelected(true);
		}
		if (category && filterState.category === null) {
			setCurrentValue('유형');
			setIsCategorySelected(false);
		}
	}, [filterState.category, category]);

	return (
		<S.Dropdown
			$showDropdown={showDropdown}
			$scope={scope}
			$isCheck={isChecked}
			ref={dropdownRef}
			$isScopeSelected={isScopeSelected}
			$isCategorySelected={isCategorySelected}
		>
			<article className='wrapper' onClick={onClickDropdown}>
				<div className='dropdown-box'>
					{scope && (
						<div className='value scope-selected'>
							{filterState.scope ? getKeyByValue(scopeObj, filterState.scope) : currentValue}
						</div>
					)}
					{category && (
						<div className='value category-selected'>
							{filterState.category
								? getKeyByValue(categoryObj, filterState.category)
								: currentValue}
						</div>
					)}
					{applicant && <div className='value'>{currentValue}</div>}
					<img src={showDropdown ? DropdownArrowUp : DropdownArrow} />
				</div>
				{showDropdown && (
					<>
						<div className='dropdown'>
							{scope && (
								<ul className='menu-container'>
									{data?.map((e: string, index: number) => (
										<React.Fragment key={index}>
											<section
												className={`menu-scope ${e === '교내' && 'in'}`}
												onClick={handleRadio}
											>
												<input
													type='radio'
													id={`${index}`}
													name='scope'
													value={e}
													checked={e === currentValue}
													onChange={onClickRadio}
												/>
												<label htmlFor={`${index}`}>{e}</label>
											</section>
											{currentValue === '교내' && (
												<section className='inside' onClick={onClickInside}>
													<section className='container-inside'>
														<section className='intro'>
															<span className='description'>
																수업이신 경우 오른쪽의 “수업” 체크박스를 눌러주세요.
															</span>
														</section>
														<section className='container-checkbox'>
															<input
																type='checkbox'
																id='course'
																onClick={onClickCheckbox}
																className='input-checkbox'
																checked={isChecked}
															/>
															<label className='course-label' htmlFor='course'>
																수업
															</label>
														</section>
														<section className='wrapper-inputs' ref={insideRef}>
															<section className='container-inputs'>
																<input
																	type='text'
																	placeholder='수업명'
																	value={value.course.name}
																	disabled={!isChecked ? true : false}
																	onChange={onChangeCourse}
																	onClick={() => setDropdown({ course: true, professor: false })}
																/>
																{dropdown.course && (
																	<section className='dropdown'>
																		{!isLoadingCourse &&
																			dataCourse?.map((keyword: Keyword) => (
																				<span
																					key={keyword.id}
																					onClick={onClickCourse}
																					id={keyword.id.toString()}
																				>
																					{keyword.name}
																				</span>
																			))}
																	</section>
																)}
															</section>
															<section className='container-inputs'>
																<input
																	type='text'
																	placeholder='교수명'
																	value={value.professor.name}
																	disabled={!isChecked ? true : false}
																	onChange={onChangeProfessor}
																	onClick={() => setDropdown({ course: false, professor: true })}
																/>
																{dropdown.professor && (
																	<section className='dropdown'>
																		{!isLoadingProfessor &&
																			dataProfessor?.map((keyword: Keyword) => (
																				<span
																					key={keyword.id}
																					onClick={onClickProfessor}
																					id={keyword.id.toString()}
																				>
																					{keyword.name}
																				</span>
																			))}
																	</section>
																)}
															</section>
														</section>
													</section>
													<section className='control-btn'>
														<section className='clear' onClick={onClickClearInfo}>
															<img src={Clear} />
															<span>초기화</span>
														</section>
														<button type='button' onClick={submitInfo}>
															적용
														</button>
													</section>
												</section>
											)}
										</React.Fragment>
									))}
								</ul>
							)}
							{category && (
								<ul className='menu-container category'>
									{data?.map((e: string, index: number) => (
										<li onClick={onClickList} key={index}>
											{e}
										</li>
									))}
								</ul>
							)}
							{applicant && (
								<ul className='menu-container category'>
									{roleObj?.map(e => (
										<li
											onClick={event => onClickList(event, e.id as number | undefined)}
											key={e.id}
										>
											{e.title}
										</li>
									))}
								</ul>
							)}
						</div>
					</>
				)}
			</article>
		</S.Dropdown>
	);
};

export default Dropdown;
