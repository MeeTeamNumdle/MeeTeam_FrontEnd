import React, { useState } from 'react';
import { CommentDeleteModal, KebabMenu, ProfileImage, ReplyComment, ReplyInput } from '../..';
import S from './Comment.styled';
import { Comment as CommentType } from '../../../types';
import { useParams } from 'react-router-dom';
import { useCommentEdit, useLogin } from '../../../hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilValue, useRecoilState } from 'recoil';
import { commentDeleteModalState, userState } from '../../../atom';
import { ko } from 'date-fns/locale';
import { formatDistanceToNow, differenceInDays } from 'date-fns';

const Comment = ({
	id,
	userId,
	nickname,
	content,
	replies,
	isWriter,
	createAt,
	profileImg,
	groupNumber,
}: CommentType) => {
	const { id: recruitId } = useParams();
	const pageNum = Number(recruitId);
	const { isLogin } = useLogin();
	const [replyClicked, setReplyClicked] = useState<boolean>(false);
	const [value, setValue] = useState<string>(content);
	const [showKebab, setShowKebab] = useState<boolean>(true);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [mention, setMention] = useState<string>('');
	const [isDelete, setIsDelete] = useRecoilState(commentDeleteModalState);
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
				setReplyClicked(true);
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
				setReplyClicked(true);
			},
		},
	];

	const onChangeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const onClickCancel = () => {
		setReplyClicked(false);
	};

	const editingComment = () => {
		setIsEdit(false);
		setShowKebab(true);
		onClickSave();
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

	const replyHandler = (nickname: string) => {
		setReplyClicked(true);
		setMention(nickname);
	};

	const replyInputHandler = () => {
		setReplyClicked(false);
	};

	return (
		<S.Comment>
			<section className='wrapper'>
				<article className='container'>
					<section className='comment-icon'>
						<section>
							<ProfileImage url={profileImg} userId={userId} size='2.31rem' />
						</section>
						<span className='nickname'>{nickname}</span>
						{!isEdit && (
							<span className='create-at'>{diffDays > 3 ? createAt.slice(0, -9) : time}</span>
						)}
						{isWriter && <section className='writer-mark'>작성자</section>}
					</section>
					<section className='comment-info'>
						{!isEdit ? (
							<span>
								{value === null
									? '삭제된 메세지입니다.'
									: value.split('\n').map((line, index) => {
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
										onClick={() => setIsEdit(false)}
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
			<hr className='' />
			<section className='wrapper-replies'>
				<ul className='container-reply__lists'>
					{replies?.map(reply => {
						return <ReplyComment key={reply.id} {...reply} replyComment={replyHandler} />;
					})}
				</ul>
				{replyClicked && groupNumber && (
					<ReplyInput
						key={id}
						onClickCancel={onClickCancel}
						groupNumber={groupNumber}
						pageNum={pageNum}
						replyInputHandler={replyInputHandler}
					/>
				)}
			</section>
			{isDelete.isDelete && (
				<section className='modal-background'>
					<CommentDeleteModal pageNum={pageNum} commentId={isDelete.id} />
				</section>
			)}
		</S.Comment>
	);
};

export default Comment;
