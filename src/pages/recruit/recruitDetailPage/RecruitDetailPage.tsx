import React, { useEffect, useMemo } from 'react';
import S from './RecruitDetailPage.styled';
import {
	CommentInput,
	Comment,
	TitleInfo,
	RecruitInfo,
	RecruitDescription,
	RecruitRoles,
	RecruitTag,
	LinkToList,
	WriterFooter,
	ApplierFooter,
	ApplyModal,
	ConfirmModal,
	FinalModal,
	ClosedFooter,
	ApplyCancel,
	ApplyClose,
	WaitModal,
} from '../../../components';
import { fixModalBackground } from '../../../utils';
import { JsxElementComponentProps } from '../../../types';
import { useQuery } from '@tanstack/react-query';
import { getPostingData } from '../../../service';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
	applyCancelModalState,
	applyCloseModalState,
	applyModalState,
	applyStepState,
	commentDeleteModalState,
	recruitInputState,
	waitModalState,
} from '../../../atom';
import { useParams, useNavigate } from 'react-router-dom';
import { useLogin } from '../../../hooks';

const RecruitDetailPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const pageNum = Number(id);
	const isModal = useRecoilValue(applyModalState);
	const isCancel = useRecoilValue(applyCancelModalState);
	const isClose = useRecoilValue(applyCloseModalState);
	const isWait = useRecoilValue(waitModalState);
	const isDelete = useRecoilValue(commentDeleteModalState);
	const step = useRecoilValue(applyStepState);
	const setFormData = useSetRecoilState(recruitInputState);
	const stepLists: JsxElementComponentProps = {
		0: <ApplyModal />,
		1: <ConfirmModal />,
		2: <FinalModal />,
	};
	const { isLoggedIn } = useLogin();

	const { data: detailedData, isSuccess } = useQuery({
		queryKey: ['detailedPage', { pageNum, isLoggedIn }],
		queryFn: () => getPostingData({ pageNum, isLoggedIn }),
	});
	const period = detailedData?.proceedingStart + ' ~ ' + detailedData?.proceedingEnd;

	// 함수로 변경 후 -> useMemo 사용하기
	const diffDate = Math.ceil(
		Math.abs(
			(new Date(detailedData?.deadline as any).getTime() - new Date().getTime()) /
				(1000 * 60 * 60 * 24)
		)
	).toString();

	const totalCommentsCount = useMemo(() => {
		if (detailedData) {
			return detailedData.comments.reduce((total, comment) => {
				return total + 1 + (comment.replies ? comment.replies.length : 0);
			}, 0);
		}
	}, [detailedData?.comments]);

	const onClickEditPage = async () => {
		if (detailedData) {
			setFormData({
				pageNum: pageNum,
				scope: detailedData.scope,
				category: detailedData.category,
				deadline: detailedData.deadline,
				proceedingStart: detailedData.proceedingStart,
				proceedingEnd: detailedData.proceedingEnd,
				fieldId: 1,
				proceedType: detailedData.proceedType,
				courseTag: {
					courseTagName: detailedData.courseName,
					courseProfessor: detailedData.courseProfessor,
					isCourse: detailedData.courseName || detailedData.courseProfessor ? true : false,
				},
				recruitmentRoles: [],
				tags: detailedData.tags.map(e => e.name),
				title: detailedData.title,
				content: detailedData.content,
			});
		}
		navigate('/edit/recruit');
	};

	useEffect(() => {
		fixModalBackground(isModal || isCancel || isClose || isWait || isDelete);
	}, [isModal, isCancel, isClose, isWait, isDelete]);

	return (
		<>
			{isSuccess && detailedData && (
				<S.RecruitDetailPage>
					<TitleInfo
						nickname={detailedData.writerNickname}
						writerId={detailedData.writerId}
						responseRate={detailedData.responseRate}
						score={detailedData.writerScore}
						createdAt={detailedData.createdAt.slice(0, -9)}
						title={detailedData.title}
						writerProfileImg={detailedData.writerProfileImg}
						bookmarkCount={detailedData.bookmarkCount}
						isBookmarked={detailedData.isBookmarked}
						writerScore={detailedData.writerScore}
					/>
					<RecruitInfo
						deadline={detailedData.deadline}
						period={period}
						scope={detailedData.scope}
						courseName={detailedData.courseName}
						category={detailedData.category}
						proceedType={detailedData.proceedType}
						courseProfessor={detailedData.courseProfessor}
						dDay={diffDate}
						isClosed={detailedData.isClosed}
					/>
					<RecruitDescription content={detailedData.content} />
					<RecruitRoles roles={detailedData.recruitmentRoles} />
					<RecruitTag tags={detailedData.tags} />
					<LinkToList />
					<article className='wrapper-comments'>
						<section className='container-title'>
							<h3>댓글</h3>
							<span>{totalCommentsCount}</span>
						</section>
						<hr />
						<section className='container-comments'>
							<ul className='container-comments__lists'>
								{isSuccess &&
									detailedData.comments.map((comment, _) => {
										return <Comment key={comment.id} {...comment} />;
									})}
							</ul>
							<CommentInput />
						</section>
					</article>
					{isModal && (
						<form>
							<section className='modal-background'>{stepLists[step]}</section>
						</form>
					)}
					{isCancel && (
						<section className='modal-background'>
							<ApplyCancel />
						</section>
					)}
					{isClose && (
						<section className='modal-background'>
							<ApplyClose />
						</section>
					)}
					{isWait && (
						<section className='modal-background'>
							<WaitModal />
						</section>
					)}
				</S.RecruitDetailPage>
			)}
			<S.Footer>
				{detailedData && (
					<section className='container-btn'>
						{detailedData.isWriter && !detailedData.isClosed && (
							<WriterFooter onClickEditPage={onClickEditPage} pageNum={pageNum} />
						)}
						{!detailedData.isWriter && (
							<ApplierFooter deadline={detailedData.deadline} isApplied={detailedData.isApplied} />
						)}
						{detailedData.isClosed && <ClosedFooter />}
					</section>
				)}
			</S.Footer>
		</>
	);
};

export default RecruitDetailPage;
