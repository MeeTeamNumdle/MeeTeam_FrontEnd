import React, { useState, useEffect, useRef, useCallback } from 'react';
import S from '../BasicInformation.styled';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '../../../../../hooks';
import { getCourseKeyword, getProfessorKeyword } from '../../../../../service';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../../../atom';

const ContainerCourse = () => {
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const [formData, setFormData] = useRecoilState(recruitInputState);
	const [isChecked, setIsChecked] = useState<boolean>(formData.courseTag.isCourse);
	const [name, setName] = useState({
		course: formData.courseTag.courseTagName as string,
		professor: formData.courseTag.courseProfessor as string,
	});
	const [dropdown, setDropdown] = useState({
		course: false,
		professor: false,
	});
	const keywordCourse = useDebounce(name.course, 500);
	const keywordProfessor = useDebounce(name.professor, 500);
	const { data: dataCourse, isLoading: isLoadingCourse } = useQuery({
		queryKey: ['searchCourse', keywordCourse],
		queryFn: () => getCourseKeyword(keywordCourse),
		staleTime: Infinity,
		gcTime: Infinity,
	});
	const { data: dataProfessor, isLoading: isLoadingProfessor } = useQuery({
		queryKey: ['searchProfessor', keywordProfessor],
		queryFn: () => getProfessorKeyword(keywordProfessor),
		staleTime: Infinity,
		gcTime: Infinity,
	});

	const onChangeCourse = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setName(prev => ({ ...prev, course: event.target.value }));
	}, []);
	const onChangeProfessor = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setName(prev => ({ ...prev, professor: event.target.value }));
	}, []);

	const onClickCheckbox = () => {
		setIsChecked(prev => !prev);
		setFormData(prev => ({
			...prev,
			courseTag: { ...prev.courseTag, isCourse: true },
		}));
	};

	const onClickCourse = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		setName(prev => ({ ...prev, course: innerText }));
		setFormData(prev => ({
			...prev,
			courseTag: { ...prev.courseTag, courseTagName: innerText },
		}));
		setDropdown(prev => ({ ...prev, course: false }));
	};
	const onClickProfessor = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		setName(prev => ({ ...prev, professor: innerText }));
		setFormData(prev => ({
			...prev,
			courseTag: { ...prev.courseTag, courseProfessor: innerText },
		}));
		setDropdown(prev => ({ ...prev, professor: false }));
	};
	const onKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
		}
	};

	useEffect(() => {
		const outsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (dropdown.course && dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
				setDropdown(prev => ({ ...prev, course: false }));
			}
			if (
				dropdown.professor &&
				dropdownRef.current &&
				!dropdownRef.current.contains(target as Node)
			) {
				setDropdown(prev => ({ ...prev, professor: false }));
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [dropdownRef.current, dropdown.course, dropdown.professor]);

	return (
		<S.ContainerCourse $isChecked={isChecked} ref={dropdownRef}>
			<span className='input-subtitle'>수업</span>
			<section className='intro'>
				<span className='description'>수업이신 경우 오른쪽의 “수업” 체크박스를 눌러주세요.</span>
				<section className='container-checkbox'>
					<input type='checkbox' id='course' onClick={onClickCheckbox} checked={isChecked} />
					<label className='course-label' htmlFor='course'>
						수업
					</label>
				</section>
			</section>
			<section className='wrapper-inputs'>
				<section className='container-inputs'>
					<input
						type='text'
						placeholder='수업명'
						value={name.course}
						disabled={!isChecked ? true : false}
						onChange={onChangeCourse}
						onKeyDown={onKeyDown}
						onClick={() => setDropdown(prev => ({ ...prev, course: true }))}
					/>
					{dropdown.course && (
						<section className='dropdown'>
							{!isLoadingCourse &&
								dataCourse?.map((keyword: any) => (
									<span key={keyword.id} onClick={onClickCourse} className='option'>
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
						value={name.professor}
						disabled={!isChecked ? true : false}
						onChange={onChangeProfessor}
						onKeyDown={onKeyDown}
						onClick={() => setDropdown(prev => ({ ...prev, professor: true }))}
					/>
					{dropdown.professor && (
						<section className='dropdown'>
							{!isLoadingProfessor &&
								dataProfessor?.map((keyword: any) => (
									<span key={keyword.id} onClick={onClickProfessor} className='option'>
										{keyword.name}
									</span>
								))}
						</section>
					)}
				</section>
			</section>
		</S.ContainerCourse>
	);
};

export default ContainerCourse;
