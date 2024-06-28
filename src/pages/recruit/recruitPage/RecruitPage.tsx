import React, { useEffect, useRef, useState } from 'react';
import {
	Dropdown,
	RecruitCard,
	Pagination,
	DetailedInput,
	NeedLogin,
	ModalPortal,
	Modal,
	Footer,
} from '../../../components';
import S from './RecruitPage.styled';
import {
	CancelWhite,
	Clear,
	Create,
	DropdownArrow,
	DropdownArrowUp,
	FilledBookmark,
	PlusWhite,
	Portpolio,
	Profile,
	SearchIcon,
	XBtn,
} from '../../../assets';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
	detailedFilterState,
	needLoginModalState,
	pageState,
	previousLocationState,
	recruitFilterState,
	signupModalState,
} from '../../../atom';
import { getPostList } from '../../../service/recruit/board';
import { useQuery } from '@tanstack/react-query';
import { useLogin } from '../../../hooks';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { fixModalBackground } from '../../../utils';
import { is } from 'date-fns/locale';

const RecruitPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const fieldRef = useRef<HTMLDivElement | null>(null);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const [searchKeyword, setSearchKeyword] = useState('');
	const [isDetailSelected, setIsDetailSelected] = useState(false);
	const [isFloatingOpen, setIsFloatingOpen] = useState<boolean>(false);
	const [fieldValue, setFieldValue] = useState({
		applied: false,
		value: {
			id: null as number | null,
			value: '분야를 선택해주세요',
		},
	});
	const [isFocused, setIsFocused] = useState(false);
	const [placeholderText, setPlaceholderText] = useState('제목을 검색해보세요.');
	const [page, setPage] = useRecoilState<number>(pageState);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isFieldOpen, setIsFieldOpen] = useState<boolean>(false);
	const [filterState, setFilterState] = useRecoilState(recruitFilterState);
	const setDetailedFilterState = useSetRecoilState(detailedFilterState);
	const setPreviousLocationState = useSetRecoilState(previousLocationState);
	const [isOpenDetail, setIsOpenDetail] = useState({
		skill: true,
		role: false,
		tag: false,
		message: '기술',
	});
	const [searchParams, setSearchParams] = useSearchParams();
	const [needLoginModal, setNeedLoginModal] = useRecoilState(needLoginModalState);
	const { isLogin } = useLogin();
	const { data, isLoading } = useQuery({
		queryKey: ['recruit_board', { filterState, isLogin, page }],
		queryFn: () => getPostList({ filterState, isLogin, page }),
	});

	const onClickDetailed = (event: React.MouseEvent) => {
		event.stopPropagation();
		setIsOpen(prev => !prev);
	};

	const onClickField = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		setFieldValue({
			applied: false,
			value: { id: Number(event.currentTarget.id), value: innerText },
		});
		searchParams.set('field', event.currentTarget.id);
	};

	const submitField = () => {
		setFieldValue(prev => ({ ...prev, applied: true }));
		setFilterState(prev => ({ ...prev, field: fieldValue.value.id }));
		setIsFieldOpen(false);
		setSearchParams(searchParams);
	};

	const onClickClear = () => {
		setFilterState({
			scope: null,
			category: null,
			field: null,
			skill: [],
			role: [],
			tag: [],
			keyword: '',
			course: null,
			professor: null,
		});
		setSearchKeyword('');
		setDetailedFilterState({ skill: [], role: [], tag: [] });
		setSearchParams(searchParams);
		setIsOpenDetail({ skill: true, role: false, tag: false, message: '기술' });

		searchParams.delete('scope');
		searchParams.delete('category');
		searchParams.delete('skill');
		searchParams.delete('role');
		searchParams.delete('tag');
		searchParams.delete('keyword');
		searchParams.delete('course');
		searchParams.delete('professor');
		setIsDetailSelected(false);
		setSearchParams(searchParams);
	};

	const closeHandler = () => {
		setIsOpen(false);
	};

	const onClickDetails = (event: React.MouseEvent<HTMLSpanElement>) => {
		event.stopPropagation();
		const { innerText } = event.target as HTMLElement;
		if (innerText === '기술') {
			setIsOpenDetail({ skill: true, role: false, tag: false, message: innerText });
		} else if (innerText === '역할') {
			setIsOpenDetail({ skill: false, role: true, tag: false, message: innerText });
		} else if (innerText === '태그') {
			setIsOpenDetail({ skill: false, role: false, tag: true, message: innerText });
		}
	};

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			submitTagItem();
		}
		if (event.key === 'Enter') {
			event.preventDefault();
		}
	};

	const onClickClearField = () => {
		setFilterState(prev => ({ ...prev, field: null }));
		setFieldValue({ applied: false, value: { id: null, value: '분야를 선택해주세요' } });
		searchParams.delete('field');
		setSearchParams(searchParams);
	};

	const onClickDeleteKeyword = () => {
		setFilterState(prev => ({ ...prev, keyword: '' }));
		setSearchKeyword('');
		searchParams.delete('keyword');
		setSearchParams(searchParams);
	};

	const submitTagItem = () => {
		setFilterState(prev => ({ ...prev, keyword: searchKeyword }));
		searchParams.set('keyword', searchKeyword);
		setSearchParams(searchParams);
	};

	const recruitCreateHandler = () => {
		if (isLogin) {
			navigate('/recruitment/postings');
		} else {
			setNeedLoginModal({ isOpen: true, type: 'RECRUIT_CREATE' });
		}
	};

	const bookmarkNavigateHandler = () => {
		if (isLogin) {
			navigate('/management/bookmark');
		} else {
			setNeedLoginModal({ isOpen: true, type: 'MANAGE_BOOKMARK' });
		}
	};

	const profileCreateHandler = () => {
		if (isLogin) {
			navigate('/profile/edit');
		} else {
			setNeedLoginModal({ isOpen: true, type: 'PROFILE_CREATE' });
		}
	};

	const portfolioCreateHandler = () => {
		if (isLogin) {
			navigate('/portfolio/edit');
		} else {
			setNeedLoginModal({ isOpen: true, type: 'PORTFOLIO_CREATE' });
		}
	};

	const detailOptionsSelected = () => {
		setIsDetailSelected(true);
	};

	const detailOptionsNotSelected = () => {
		setIsDetailSelected(false);
	};

	const handlerChildDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	const handleFocusedPlaceholder = () => {
		setIsFocused(true);
		setPlaceholderText('검색어 입력');
	};

	const handleBlurredPlaceholder = () => {
		setIsFocused(true);
		setPlaceholderText('제목을 검색해보세요.');
	};

	useEffect(() => {
		const outsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (isOpen && dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
				setIsOpen(false);
			}
			if (isFieldOpen && fieldRef.current && !fieldRef.current.contains(target as Node)) {
				setIsFieldOpen(false);
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [dropdownRef.current, isOpen, fieldRef.current, isFieldOpen]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [page]);

	useEffect(() => {
		fixModalBackground(needLoginModal.isOpen);
	}, [needLoginModal.isOpen]);

	useEffect(() => {
		setPreviousLocationState(location.pathname + location.search);
	}, [location]);

	useEffect(() => {
		if (
			filterState.role.length === 0 &&
			filterState.skill.length === 0 &&
			filterState.tag.length === 0
		) {
			detailOptionsNotSelected();
		} else {
			detailOptionsSelected();
		}
	}, [filterState.role, filterState.skill, filterState.tag]);

	useEffect(() => {
		const isScope = searchParams.get('scope');
		const isCategory = searchParams.get('category');
		const isSkill = searchParams.getAll('skill').map(Number);
		const isRole = searchParams.getAll('role').map(Number);
		const isTag = searchParams.getAll('tag').map(Number);
		const isKeyword = searchParams.get('keyword');
		const isField = searchParams.get('field');
		const isCourse = searchParams.get('course');
		const isProfessor = searchParams.get('professor');

		setFilterState({
			scope: isScope ? Number(isScope) : null,
			category: isCategory ? Number(isCategory) : null,
			skill: isSkill ? isSkill : [],
			role: isRole ? isRole : [],
			tag: isTag ? isTag : [],
			keyword: isKeyword ? isKeyword : '',
			field: isField ? Number(isField) : null,
			course: isCourse ? Number(isCourse) : null,
			professor: isProfessor ? Number(isProfessor) : null,
		});
	}, []);

	useEffect(() => {
		setSearchKeyword(filterState.keyword as any);
	}, [filterState.keyword]);

	// 회원가입 이후 팝업창 띄우기
	const [signupModalOpen, setSignupModalOpen] = useRecoilState(signupModalState);
	useEffect(() => {
		fixModalBackground(signupModalOpen);
	}, [signupModalOpen]);

	const signupModalProps = {
		title: '프로필을 추가해보세요!',
		content:
			'프로필 입력정보를 추가하면\n팀을 만날 확률이 늘어납니다.\n내 프로필로 이동하시겠습니끼?',
		defaultBtn: {
			title: '나중에 하기',
			small: true,
			handleClick: () => setSignupModalOpen(false),
		},
		primaryBtn: {
			title: '프로필로 이동',
			small: true,
			handleClick: () => {
				setSignupModalOpen(false);
				navigate(`/profile/${location.state?.userId}`);
			},
		},
	};

	return (
		<>
			<S.RecruitPage
				$isFieldClick={fieldValue.value.value !== '분야를 선택해주세요'}
				$isDetailedClick={isOpen}
				$isDetailSelected={isDetailSelected}
			>
				<section>
					<section className='wrapper-title' ref={fieldRef}>
						<h2>분야 전체</h2>
						<div className='sep'> | </div>
						<div className='container-field' onClick={() => setIsFieldOpen(prev => !prev)}>
							<h3>{fieldValue.applied ? fieldValue.value.value : '분야를 선택해주세요'}</h3>
							<img src={DropdownArrow} />
						</div>
						{isFieldOpen && (
							<article className='dropdown-field'>
								<section className='container-keys'>
									<span className='field-key' id={'1'} onClick={onClickField}>
										개발
									</span>
								</section>
								<article className='container-btns'>
									<section className='clear' onClick={onClickClearField}>
										<img src={Clear} />
										<span>초기화</span>
									</section>
									<button type='button' onClick={submitField}>
										적용
									</button>
								</article>
							</article>
						)}
					</section>
					<section className='wrapper-filters'>
						<section className='container-filters'>
							{isLogin && (
								<Dropdown data={['모든 범위', '교내', '교외']} initialData='범위' scope />
							)}
							<Dropdown
								data={['모든 유형', '프로젝트', '스터디', '공모전']}
								initialData='유형'
								category
							/>
							<article className='dropdown-detailed' onClick={onClickDetailed} ref={dropdownRef}>
								<section className='dropdown-box'>
									<label className='selected'>{'상세조건'}</label>
									<img src={isOpen ? DropdownArrowUp : DropdownArrow} />
								</section>
								{isOpen && (
									<section className='container-dropdown' onClick={handlerChildDropdown}>
										<section className='sidebar'>
											<span
												className={`body1 sidebar-elem ${isOpenDetail.skill ? 'active' : ''}`}
												onClick={onClickDetails}
											>
												기술
											</span>
											<span
												className={`body1 sidebar-elem ${isOpenDetail.role ? 'active' : ''}`}
												onClick={onClickDetails}
											>
												역할
											</span>
											<span
												className={`body1 sidebar-elem ${isOpenDetail.tag ? 'active' : ''}`}
												onClick={onClickDetails}
											>
												태그
											</span>
										</section>
										<DetailedInput
											type={isOpenDetail.message}
											closeHandler={closeHandler}
											detailOptionsSelected={detailOptionsSelected}
											detailOptionsNotSelected={detailOptionsNotSelected}
										/>
									</section>
								)}
							</article>
							<article className='clear' onClick={onClickClear}>
								<img src={Clear} />
								<span>초기화</span>
							</article>
						</section>
						<section className='container-options__search'>
							<div>
								<img className='search-icon' src={SearchIcon} />
							</div>
							<div className='search-bar'>
								<input
									placeholder={placeholderText}
									type='text'
									onChange={event => setSearchKeyword(event.target.value)}
									value={searchKeyword}
									onKeyDown={onKeyPress}
									onFocus={handleFocusedPlaceholder}
									onBlur={handleBlurredPlaceholder}
								/>
							</div>
							{searchKeyword && (
								<img className='clear-keyword' src={XBtn} onClick={onClickDeleteKeyword} />
							)}
						</section>
					</section>
				</section>
				<hr />
				<section>
					<section className='container-contents'>
						<div>
							<article className='bookmark-intro' onClick={bookmarkNavigateHandler}>
								<img src={FilledBookmark} />
								<span className='body2'>북마크 모아보기 {'❯'}</span>
							</article>
							{isLoading ? (
								<section></section>
							) : (
								data && (
									<section className='container-contents__grid'>
										{data.posts.map(post => (
											<RecruitCard {...post} key={post.id} />
										))}
									</section>
								)
							)}
							{data && data.posts.length === 0 && (
								<section className='no-results'>
									<span>일치하는 결과가 없습니다.</span>
								</section>
							)}
						</div>
					</section>
				</section>
				<article className='container-pagination'>
					{data && (
						<Pagination
							postsNum={data.pageInfo.totalContents}
							postsPerPage={data.pageInfo.size}
							currentPage={page}
							setCurrentPage={setPage}
						/>
					)}
				</article>
				<article className='btn-floating' onClick={() => setIsFloatingOpen(prev => !prev)}>
					{isFloatingOpen && (
						<section className='floating-menu'>
							<article className='container-menu'>
								<span className='nav-info'>내 프로필 작성</span>
								<section className='menu floating' onClick={profileCreateHandler}>
									<img src={Profile} fetchpriority='high' />
								</section>
							</article>
							<article className='container-menu'>
								<span className='nav-info'>구인글 작성</span>
								<section className='menu floating' onClick={recruitCreateHandler}>
									<img src={Create} fetchpriority='high' />
								</section>
							</article>
							<article className='container-menu'>
								<span className='nav-info'>포트폴리오 등록</span>
								<section className='menu floating' onClick={portfolioCreateHandler}>
									<img src={Portpolio} fetchpriority='high' />
								</section>
							</article>
						</section>
					)}
					<section className={`container-btn floating  ${isFloatingOpen && 'cancel-icon'}`}>
						{isFloatingOpen ? (
							<img className='floating-icon' src={CancelWhite} />
						) : (
							<img className='floating-icon add-icon' src={PlusWhite} />
						)}
					</section>
				</article>
				{needLoginModal.isOpen && (
					<section className='modal-background'>
						<NeedLogin type={needLoginModal.type} />
					</section>
				)}
				{signupModalOpen && (
					<ModalPortal>
						<Modal {...signupModalProps} />
					</ModalPortal>
				)}
			</S.RecruitPage>
			<Footer />
		</>
	);
};

export default RecruitPage;
