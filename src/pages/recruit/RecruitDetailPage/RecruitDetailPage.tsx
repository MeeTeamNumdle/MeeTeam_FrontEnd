import React, { useEffect, useState } from 'react';
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
} from '../../../components';
import { tempData } from './data';
import { fixModalBackground, simpleDate } from '../../../utils';
import { Comment as CommentForm, JsxElementComponentProps } from '../../../types';
import { useQuery } from '@tanstack/react-query';
import { getPostingData } from '../../../service';
import { useRecoilValue } from 'recoil';
import { applyModalState, applyStepState } from '../../../atom';

const RecruitDetailPage = () => {
	const [contents, setContents] = useState<string>('');
	const [commentsList, setCommentsList] = useState<CommentForm[]>(tempData.comments);
	const username = 'yeom';
	const createAt = simpleDate(new Date());
	const isModal = useRecoilValue(applyModalState);
	const step = useRecoilValue(applyStepState);
	const stepLists: JsxElementComponentProps = {
		0: <ApplyModal />,
		1: <ConfirmModal />,
		2: <FinalModal />,
	};

	const pageNumber = 2;

	const { data: detailedData, isLoading } = useQuery({
		queryKey: ['detailedPage', pageNumber],
		queryFn: () => getPostingData(pageNumber),
	});

	const period = detailedData?.proceedingStart + '-' + detailedData?.proceedingEnd;
	const diffDate = Math.ceil(
		Math.abs(
			(new Date(detailedData?.deadline as any).getTime() - new Date().getTime()) /
				(1000 * 60 * 60 * 24)
		)
	).toString();

	const addComment = () => {
		if (contents !== '' && contents.trim() !== '') {
			const newComment = {
				id: tempData.comments.length + 1,
				nickname: 'yeom',
				content: contents,
				replies: [],
				isWriter: true,
				createAt: createAt?.toString(),
				profileImg: '',
			};
			setCommentsList([...commentsList, newComment]);
			setContents('');
		}
	};

	const deleteComment = (id: number) => {
		setCommentsList(prevComments => prevComments.filter(v => v.id !== id));
	};

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			addComment();
		}
	};

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContents(event.target.value);
	};

	const onClickInput = () => {};

	useEffect(() => {
		fixModalBackground(isModal);
	}, [isModal]);

	return (
		<>
			{!isLoading && detailedData && (
				<S.RecruitDetailPage>
					<TitleInfo
						nickname={detailedData.writerNickname}
						responseRate={detailedData.responseRate}
						score={detailedData.writerScore}
						createdAt={detailedData.createdAt.slice(0, -9)}
						title={detailedData.title}
						writerProfileImg={detailedData.writerProfileImg}
						bookmarkCount={detailedData.bookmarkCount}
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
					/>
					<RecruitDescription content={detailedData.content} />
					<RecruitRoles roles={detailedData.recruitmentRoles} />
					<RecruitTag tags={detailedData.tags} />
					<LinkToList />
					<article className='wrapper-comments'>
						<section className='container-title'>
							<h3>댓글</h3>
							<span>{'4'}</span>
						</section>
						<hr />
						<section className='container-comments'>
							<ul className='container-comments__lists'>
								{commentsList.map((comment, _) => {
									return (
										<Comment
											key={comment.id}
											id={comment.id}
											nickname={comment.nickname}
											content={comment.content}
											replies={comment.replies}
											isWriter={comment.nickname === username}
											createAt={comment.createAt}
											profileImg={comment.profileImg}
											deleteComment={() => deleteComment(comment.id)}
										/>
									);
								})}
							</ul>
							<CommentInput
								contents={contents}
								addComment={addComment}
								onKeyPress={onKeyPress}
								onChangeHandler={onChangeHandler}
								onClickInput={onClickInput}
							/>
						</section>
					</article>
					{isModal && (
						<form>
							<section className='modal-background'>{stepLists[step]}</section>
						</form>
					)}
				</S.RecruitDetailPage>
			)}
			<S.Footer>
				<section className='container-btn'>
					{detailedData?.isWriter ? <WriterFooter /> : <ApplierFooter />}
				</section>
			</S.Footer>
		</>
	);
};

export default RecruitDetailPage;
