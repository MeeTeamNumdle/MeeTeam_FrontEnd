import React, { useState, useEffect, useRef } from 'react';
import S from './ApplierManagePage.styled';
import {
	ArrowTop,
	DropdownArrow,
	DropdownArrowUp,
	FloatingBackground,
	LinkIcon,
} from '../../../assets';
import {
	ApplicantCard,
	ApplyRole,
	ApproveModal,
	Dropdown,
	OpenChatModal,
	RefuseModal,
	Toast,
} from '../../../components';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApplicantsList } from '../../../service';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
	applicantFilter,
	applicantHolder,
	applicantModalState,
	openChatModalState,
	toastState,
	userState,
} from '../../../atom';
import { getRecruitInfo, setOpenChatLink } from '../../../service/recruit/applicant';
import { ApplicantInfo, ApplicantsLink } from '../../../types';
import { useNavigate, useParams } from 'react-router-dom';
import { useScrollToTop } from '../../../hooks';
import { fixModalBackground } from '../../../utils';
import NotFound from '../../notFound/NotFound';

const ApplierManagePage = () => {
	const { id } = useParams();
	const pageNum = Number(id);
	const role = useRecoilValue(applicantFilter);
	const targetRef = useRef<HTMLDivElement | null>(null);
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const scrollToTop = useScrollToTop();
	const userInfo = useRecoilValue(userState);
	const [applicantModal, setApplicantModalState] = useRecoilState(applicantModalState);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);
	const [page, setPage] = useState<number>(1);
	const [isOpenChat, setIsOpenChat] = useState<boolean>(false);
	const [isOpenCurrent, setIsOpenCurrent] = useState<boolean>(true);
	const [linkUrl, setLinkUrl] = useState<string>('');
	const checkList = useRecoilValue(applicantHolder);
	const [isToast, setIsToast] = useRecoilState(toastState);
	const isTutorialOpen = useRecoilValue(openChatModalState);
	const [applicantsArr, setApplicantsArr] = useState<ApplicantInfo[]>([]);

	const {
		data: applicantList,
		isSuccess: listSuccess,
		refetch,
	} = useQuery({
		queryKey: ['applicantsList', { pageNum, role }],
		queryFn: () => getApplicantsList({ pageNum: pageNum, role, page }),
	});
	const {
		data: recruitManageInfo,
		isSuccess: manageSuccess,
		isError,
		isLoading,
	} = useQuery({
		queryKey: ['recruitManageInfo', pageNum],
		queryFn: () => getRecruitInfo(pageNum),
	});

	const isChecked = checkList && checkList.length !== 0;

	const openLink = useMutation({
		mutationFn: ({ pageNum, link }: ApplicantsLink) => setOpenChatLink({ pageNum, link }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['recruitManageInfo'] });
		},
	});

	const onClickSetting = () => {
		setIsOpenChat(prev => !prev);
		if (isOpenChat) {
			openLink.mutate({ pageNum, link: linkUrl });
		}
	};

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLinkUrl(event.target.value);
	};

	const onClickRefused = () => {
		if (!recruitManageInfo?.link) {
			setIsToast(true);
		} else {
			setApplicantModalState({ approve: false, refuse: true });
		}
	};
	const onClickApproved = () => {
		if (!recruitManageInfo?.link) {
			setIsToast(true);
		} else {
			setApplicantModalState({ approve: true, refuse: false });
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting && applicantList?.pageInfo.hasNextPage) {
				setPage(prev => prev + 1);
			}
		});

		if (targetRef.current) {
			observer.observe(targetRef.current);
		}

		return () => {
			if (targetRef.current) {
				observer.unobserve(targetRef.current);
			}
		};
	}, []);

	useEffect(() => {
		if (page === 1 && applicantList) {
			setApplicantsArr(applicantList.applicants);
		}
		refetch();
		if (applicantList && applicantList.pageInfo.hasNextPage) {
			setApplicantsArr(prev => [...prev, ...applicantList.applicants]);
		}
	}, [page, applicantList]);

	useEffect(() => {
		if (recruitManageInfo) {
			setLinkUrl(recruitManageInfo.link);
		}
	}, [recruitManageInfo?.link]);

	useEffect(() => {
		fixModalBackground(isTutorialOpen || applicantModal.approve || applicantModal.refuse);
	}, [recruitManageInfo?.isFirstAccess, applicantModal.approve, applicantModal.refuse]);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 481);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	if (isError) {
		return <NotFound />;
	}
	return (
		<S.ApplierManagePage $isChecked={isChecked}>
			{isLoading ? (
				<section className='blank' />
			) : (
				<>
					<article className='wrapper-applicants'>
						<section className='container-title'>
							{recruitManageInfo && <h1>{recruitManageInfo.title}</h1>}
							<h4
								className='page-link'
								onClick={() => navigate(`/recruitment/postings/${pageNum}`)}
							>
								구인글 바로가기 ⟩
							</h4>
						</section>
						<section className='container-link'>
							<h4>오픈채팅방 설정</h4>
							<span className='body1-medium'>멤버를 초대할 오픈채팅방 주소를 설정해보세요!</span>
							<span className='body1-medium second'>
								신청자 승인 시, 설정한 오픈채팅방 주소가 신청자의 이메일로 보내집니다.
							</span>
							{manageSuccess && recruitManageInfo && (
								<article className='input-link'>
									{!isOpenChat ? (
										<section className='container-input__link'>
											<img src={LinkIcon} alt='link-icon' />
											<span className='body1-medium input-prev'>
												{!recruitManageInfo.link
													? '오픈채팅방 주소를 입력해주세요.'
													: recruitManageInfo.link}
											</span>
										</section>
									) : (
										<input
											type='text'
											className='input-chat body1-medium'
											placeholder='오픈채팅방 주소를 입력해주세요.'
											value={linkUrl}
											onChange={onChangeInput}
										/>
									)}

									<button type='button' className='btn-setting text-small' onClick={onClickSetting}>
										{isOpenChat ? '저장' : '설정'}
									</button>
								</article>
							)}
						</section>
						<section className='container-applicants'>
							<section className='header-applicants'>
								<section className='header-title'>
									<h4>신청자 관리</h4>
									<span className='body1-medium'>
										{`${userInfo?.nickname}님의 구인글에 신청한 (유저명)입니다. 다양한 정보들을 확인하고 멤버로 영입해보세요!`}
									</span>
								</section>
								{recruitManageInfo && manageSuccess && (
									<section className='header-control'>
										<Dropdown
											initialData='역할'
											applicant
											roleObj={[{ id: null, title: '전체' }, ...recruitManageInfo.roles]}
										/>
										<section className='btn-container'>
											<button className='text-big refused' onClick={onClickRefused}>
												거절
											</button>
											<button className='text-big approved' onClick={onClickApproved}>
												승인
											</button>
										</section>
									</section>
								)}
								<hr className='header-border' />
							</section>
							<section className='list-applicants'>
								{listSuccess &&
									applicantsArr.map(info => <ApplicantCard key={info.applicantId} {...info} />)}
							</section>
						</section>
						<section className='target-area' ref={targetRef}></section>
					</article>
					{!isMobile && (
						<article className={`current-recruit ${!isOpenCurrent && 'closed'}`}>
							<section className='container-title' onClick={() => setIsOpenCurrent(prev => !prev)}>
								<span className='body1-semibold'>모집 현황</span>
								<img src={isOpenCurrent ? DropdownArrowUp : DropdownArrow} alt='dropdown-icon' />
							</section>
							{isOpenCurrent && (
								<section className='container-roles'>
									{recruitManageInfo &&
										manageSuccess &&
										recruitManageInfo.recruitmentStatus.map((elem, index) => (
											<ApplyRole
												key={index}
												approvedMemberCount={elem.approvedMemberCount}
												recruitMemberCount={elem.recruitMemberCount}
												roleName={elem.roleName}
											/>
										))}
								</section>
							)}
						</article>
					)}
					<article className='btn-floating' onClick={scrollToTop}>
						<section className='background'>
							<img src={FloatingBackground} alt='floating-icon' />
							<section className='arrow'>
								<img src={ArrowTop} alt='arrow-icon' />
								<span>TOP</span>
							</section>
						</section>
					</article>
					{recruitManageInfo?.isFirstAccess && (
						<section className='modal-background'>
							<OpenChatModal pageNum={pageNum} />
						</section>
					)}
					{isToast && <Toast message='오픈채팅방 주소를 입력해주세요!' />}
					{applicantModal.refuse && (
						<section className='modal-background'>
							<RefuseModal pageNum={pageNum} />
						</section>
					)}
					{recruitManageInfo?.link && applicantModal.approve && (
						<section className='modal-background'>
							<ApproveModal pageNum={pageNum} openChatLink={recruitManageInfo.link} />
						</section>
					)}
				</>
			)}
		</S.ApplierManagePage>
	);
};

export default ApplierManagePage;
