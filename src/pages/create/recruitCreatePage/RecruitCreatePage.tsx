import React, { useEffect, useState } from 'react';
import S from './RecruitCreatePage.styled';
import {
	BasicInformation,
	ControlButtons,
	Description,
	DetailedInformation,
	RecruitTags,
	RecruitRoleForm,
	WarnRoleDelete,
	WarnRoleCount,
} from '../../../components/index';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import {
	recruitInputState,
	userState,
	validState,
	warnRoleDeleteModalState,
	warningModalRoleCountState,
} from '../../../atom';
import { getPostingData, editPostingRecruit, postingRecruit } from '../../../service';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { EditPosting, InputState, RoleInfo, RoleForPost } from '../../../types';
import { fixModalBackground } from '../../../utils';
import { useLogin } from '../../../hooks';
import { NotFound } from '../../index';
import { INIT_FORM_DATA } from '../../../constant';

const RecruitCreatePage = () => {
	const { id } = useParams();
	const locationObj = useLocation();
	const navigate = useNavigate();
	const { isLogin } = useLogin();
	const validCheck = useRecoilValue(validState);
	const setIsSubmit = useSetRecoilState(validState);
	const [beforeSubmit, setBeforeSubmit] = useState<boolean>(false);
	const userInfo = useRecoilValue(userState);
	const isWarnRoleDelete = useRecoilValue(warnRoleDeleteModalState);
	const isWarnRoleCount = useRecoilValue(warningModalRoleCountState);
	const [formData, setFormData] = useRecoilState<InputState>(recruitInputState);
	const postAvailable =
		validCheck.isCategory &&
		validCheck.isDeadline &&
		validCheck.isProcedure &&
		validCheck.isScope &&
		validCheck.isContent &&
		validCheck.isTitle &&
		validCheck.isRole &&
		validCheck.isContent;
	const basicAvailable =
		validCheck.isCategory &&
		validCheck.isDeadline &&
		validCheck.isProcedure &&
		validCheck.isScope &&
		validCheck.isContent &&
		validCheck.isTitle;
	const pageNum = Number(id);

	const { data, isSuccess, isLoading } = useQuery({
		queryKey: ['detailedPage', { pageNum, isLogin }],
		queryFn: () => getPostingData({ pageNum, isLogin }),
		enabled: !!id,
	});

	const uploadPost = useMutation({
		mutationFn: (formData: InputState) => postingRecruit(formData),
		onSuccess: (data: { recruitmentPostId: number }) => {
			setIsSubmit(prev => ({
				...prev,
				isSubmitted: false,
			}));
			navigate(`/recruitment/postings/${data?.recruitmentPostId}`);
		},
		onError: () => {
			setIsSubmit(prev => ({
				...prev,
				isSubmitted: false,
			}));
		},
	});
	const editPost = useMutation({
		mutationFn: ({ pageNum, formData }: EditPosting) => editPostingRecruit({ pageNum, formData }),
		onSuccess: () => {
			setIsSubmit(prev => ({
				...prev,
				isSubmitted: false,
			}));
			navigate(`/recruitment/postings/${pageNum}`);
		},
		onError: () => {
			setIsSubmit(prev => ({
				...prev,
				isSubmitted: false,
			}));
		},
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const sanitizedContent = formData.content.replace(/["']/g, '');
		setFormData({ ...formData, content: sanitizedContent });

		setIsSubmit(prev => ({
			...prev,
			isSubmitted: true,
		}));

		if (!postAvailable) {
			setBeforeSubmit(true);
		}
		if (postAvailable && !locationObj.pathname.includes('edit')) {
			uploadPost.mutate(formData, {
				onSuccess: () => setFormData(INIT_FORM_DATA),
			});
		}
		if (postAvailable && locationObj.pathname.includes('edit') && pageNum) {
			editPost.mutate(
				{ pageNum, formData },
				{
					onSuccess: () => setFormData(INIT_FORM_DATA),
				}
			);
		}
	};

	const preventGoBack = () => {
		history.pushState(null, '', location.href);
		alert('나가시려면 하단의 취소 버튼을 눌러주세요.');
	};

	const preventClose = (e: BeforeUnloadEvent) => {
		e.preventDefault();
		e.returnValue = ''; // chrome에서는 설정이 필요해서 넣은 코드
	};

	useEffect(() => {
		if (data) {
			const convertRoleInfo = (roleInfo: RoleInfo): RoleForPost => {
				return {
					roleId: roleInfo.roleId,
					count: roleInfo.recruitCount,
					skillIds: roleInfo.skills.map(e => e.id),
					skills: roleInfo.skills,
					roleName: roleInfo.roleName,
				};
			};
			const transformedRoles = data.recruitmentRoles.map(convertRoleInfo);
			if (isSuccess && locationObj.pathname.includes('edit') && transformedRoles) {
				setFormData({
					scope: data.scope,
					category: data.category,
					deadline: data.deadline,
					proceedingStart: data.proceedingStart,
					proceedingEnd: data.proceedingEnd,
					fieldId: 1,
					proceedType: data.proceedType,
					courseTag: {
						courseTagName: data.courseName,
						courseProfessor: data.courseProfessor,
						isCourse: data.courseName || data.courseProfessor ? true : false,
					},
					recruitmentRoles: transformedRoles,
					tags: data.tags.map(e => e.name),
					title: data.title,
					content: data.content,
				});
			}
		}
		return () => {
			setFormData(INIT_FORM_DATA);
		};
	}, [data, isSuccess, locationObj.pathname, setFormData]);

	useEffect(() => {
		fixModalBackground(beforeSubmit || isWarnRoleDelete);
	}, [beforeSubmit, isWarnRoleDelete]);

	useEffect(() => {
		(() => {
			history.pushState(null, '', location.href);
			window.addEventListener('popstate', preventGoBack);
		})();

		return () => {
			window.removeEventListener('popstate', preventGoBack);
		};
	}, []);

	useEffect(() => {
		(() => {
			window.addEventListener('beforeunload', preventClose);
		})();

		return () => {
			window.removeEventListener('beforeunload', preventClose);
		};
	}, []);

	if (userInfo?.userId !== data?.writerId && !isLoading && id) {
		return <NotFound />;
	}

	return (
		<S.RecruitCreatePage>
			{isLoading ? (
				<section className='blank'></section>
			) : (
				<form onSubmit={handleSubmit}>
					<Description />
					<BasicInformation />
					<DetailedInformation />
					<RecruitRoleForm
						applicantsList={data?.recruitmentRoles.map(role => {
							return { roleId: role.roleId, applicantCount: role.applicantCount };
						})}
					/>
					<RecruitTags />
					<ControlButtons />
					{beforeSubmit && (
						<article className='modal-background'>
							<section className='validation-modal'>
								<h3>필수정보를 입력해주세요.</h3>
								<span className='body2-semibold'>
									아래 <span className='caution'>미작성된 항목</span>을 입력해 구인글 작성을
									완료해주세요.
								</span>
								<section className='wrapper-list__unsatisfied'>
									{!basicAvailable && (
										<section className='container-list'>
											<section className='subtitle body2-medium'>기본정보</section>
											<section className='list-unsatisfied'>
												{!validCheck.isTitle && (
													<span className='element body2-medium'>구인글 제목</span>
												)}
												{!validCheck.isDeadline && (
													<span className='element body2-medium'>구인글 마감일</span>
												)}
												{!validCheck.isScope && <span className='element body2-medium'>범위</span>}
												{!validCheck.isCategory && (
													<span className='element body2-medium'>유형</span>
												)}
												{!validCheck.isEndDate && (
													<span className='element body2-medium'>진행기간</span>
												)}
												{!validCheck.isProcedure && (
													<span className='element body2-medium'>진행방식</span>
												)}
											</section>
										</section>
									)}
									{!validCheck.isContent && (
										<section className='container-list'>
											<section className='subtitle body2-medium'>상세내용</section>
											<section className='list-unsatisfied'>
												{!validCheck.isContent && (
													<span className='element body2-medium'>내용 미입력</span>
												)}
											</section>
										</section>
									)}
									{!validCheck.isRole && (
										<section className='container-list'>
											<section className='subtitle body2-medium'>모집역할</section>
											<section className='list-unsatisfied'>
												{!validCheck.isRole && (
													<span className='element body2-medium'>내용 미입력</span>
												)}
											</section>
										</section>
									)}
								</section>
								<button
									type='button'
									className='btn-okay txt-small'
									onClick={() => setBeforeSubmit(false)}
								>
									확인
								</button>
							</section>
						</article>
					)}
					{isWarnRoleDelete && id && (
						<article className='modal-background'>
							<WarnRoleDelete />
						</article>
					)}
					{isWarnRoleCount && (
						<article className='modal-background'>
							<WarnRoleCount />
						</article>
					)}
				</form>
			)}
		</S.RecruitCreatePage>
	);
};

export default RecruitCreatePage;
