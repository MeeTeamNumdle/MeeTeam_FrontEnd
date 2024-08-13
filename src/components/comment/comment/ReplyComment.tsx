import React, { useState } from 'react';
import S from './ReplyComment.styled';
import { CommentDeleteModal, KebabMenu, ProfileImage } from '../..';
import { Comment as CommentType } from '../../../types';
import { Reply } from '../../../assets';
import { useParams } from 'react-router-dom';
import { useCommentEdit, useLogin } from '../../../hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userState, replyDeleteModalState } from '../../../atom';
import { ko } from 'date-fns/locale';
import { formatDistanceToNow, differenceInDays } from 'date-fns';

const ReplyComment = ({
	id,
	userId,
	nickname,
	content,
	isWriter,
	createAt,
	profileImg,
	replyComment,
}: CommentType) => {
	const { id: recruitId } = useParams();
	const { isLogin } = useLogin();
	const pageNum = Number(recruitId);
	const [value, setValue] = useState<string>(content);
	const [showKebab, setShowKebab] = useState<boolean>(true);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [isDelete, setIsDelete] = useRecoilState(replyDeleteModalState);
	const queryClient = useQueryClient();
	const editComment = useCommentEdit();
	const userInfo = useRecoilValue(userState);
	const isCommentWriter = userId === userInfo?.userId;
	const diffDays = differenceInDays(new Date(), new Date(createAt));
	const time = formatDistanceToNow(new Date(createAt), { locale: ko, addSuffix: true });

	const optionLists = [
		{
			title: '답글',
			optionClickHandler: () => {
				if (replyComment) {
					replyComment(nickname);
				}
			},
		},
		{
			title: '수정',
			optionClickHandler: () => {
				setIsEdit(true);
			},
		},
		{
			title: '삭제',
			optionClickHandler: () => {
				setIsDelete({
					id: id,
					isDelete: true,
				});
			},
		},
	];

	const optionListsOthers = [
		{
			title: '답글',
			optionClickHandler: () => {
				if (replyComment) {
					replyComment(nickname);
				}
			},
		},
	];

	const editingComment = () => {
		setIsEdit(false);
		setShowKebab(true);
		onClickSave();
	};

	const onChangeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const onKeyPressEdit = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			editingComment();
		}
	};

	const onClickSave = () => {
		const comment = {
			commentId: id,
			content: value,
		};
		editComment.mutate(
			{ pageNum, comment },
			{
				onSuccess: () => {
					queryClient.invalidateQueries({ queryKey: ['detailedPage'] });
					setIsEdit(false);
				},
			}
		);
	};

	return (
		<S.ReplyComment>
			<section className='wrapper'>
				<img className='reply-icon' src={Reply} />
				<article className='container'>
					<section className='comment-icon'>
						<section>
							<ProfileImage url={profileImg} userId={userId} size='2.31rem' />
						</section>
						<span className='nickname'>{nickname}</span>
						{!isEdit && (
							<span className='createAt'>{diffDays > 3 ? createAt.slice(0, -9) : time}</span>
						)}
						{isWriter && <section className='writer-mark'>작성자</section>}
					</section>
					<section className='comment-info'>
						{!isEdit ? (
							<span>
								{value.split('\n').map((line, index) => {
									return (
										<span key={index}>
											{line}
											<br />
										</span>
									);
								})}
							</span>
						) : (
							<section className='edit-container'>
								<input
									className='edit-input'
									value={value}
									onChange={onChangeEdit}
									onKeyUp={onKeyPressEdit}
								/>
								<section className='btn-container'>
									<button
										type='button'
										className='txt-small cancel'
										onClick={() => {
											setIsEdit(false);
											setShowKebab(true);
										}}
									>
										취소
									</button>
									<button type='button' className='txt-small save' onClick={onClickSave}>
										저장
									</button>
								</section>
							</section>
						)}
					</section>
				</article>
				{showKebab && isLogin && (
					<KebabMenu options={isCommentWriter ? optionLists : optionListsOthers} />
				)}
			</section>
			<hr className='reply-hr' />
			{isDelete.isDelete && (
				<section className='modal-background'>
					<CommentDeleteModal pageNum={pageNum} commentId={isDelete.id} type='reply' />
				</section>
			)}
		</S.ReplyComment>
	);
};

export default ReplyComment;
