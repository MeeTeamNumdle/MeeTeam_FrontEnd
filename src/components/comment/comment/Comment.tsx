import React, { useState } from 'react';
import { KebabMenu, ProfileImage, ReplyComment, ReplyInput } from '../..';
import S from './Comment.styled';
import { Comment } from '../../../types';
import { useNavigate } from 'react-router-dom';

const Comment = ({
	id,
	nickname,
	content,
	replies,
	deleteComment,
	isWriter,
	createAt,
	profileImg,
}: Comment) => {
	const navigate = useNavigate();
	const isLogin = true; // 임시 코드
	const [replyClicked, setReplyClicked] = useState<boolean>(false);
	const [value, setValue] = useState<string>(content);
	const [contents, setContents] = useState<string>('');
	const [showKebab, setShowKebab] = useState<boolean>(true);
	const isUser = isLogin && nickname === 'yeom';
	const [repliesList, setRepliesList] = useState<Comment[] | undefined>(replies);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const optionLists = [
		{
			title: '수정',
			optionClickHandler: () => {
				setIsEdit(true);
				setShowKebab(false);
			},
		},
		{
			title: '삭제',
			optionClickHandler: () => {
				setShowKebab(false);
				if (deleteComment) {
					deleteComment(id);
				}
			},
		},
	];
	const deleteReply = (id: number) => {
		setRepliesList(prevReplies => prevReplies?.filter(v => v.id !== id));
	};

	const handleReplyClick = () => {
		setReplyClicked(true);
	};

	const addReply = () => {
		if (contents !== '' && contents.trim() !== '' && repliesList) {
			const newComment = {
				id: id,
				nickname: 'yeom',
				content: contents,
				isWriter: isUser,
				createAt: '',
				profileImg: '',
			};
			setRepliesList([...repliesList, newComment]);
			setContents('');
			setReplyClicked(false);
		}
	};
	const editComment = () => {
		setIsEdit(false);
		setShowKebab(true);
	};

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			addReply();
		}
	};

	const onKeyPressEdit = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			editComment();
		}
	};

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContents(event.target.value);
	};

	const onClickInput = () => {
		if (!isLogin) {
			// 로그인 페이지로 이동
			navigate('/signin');
		}
	};

	const onChangeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<S.Comment>
			<section className='wrapper'>
				<article className='container'>
					<section className='comment-icon'>
						<div>
							<ProfileImage url='' nickname={nickname} size='2.31rem' />
						</div>
						<span>{nickname}</span>
					</section>
					<section className='comment-info'>
						<span>{value}</span>
					</section>
				</article>
			</section>
			<hr />
			<section className='wrapper-replies'>
				<ul className='container-reply__lists'>
					{repliesList?.map(reply => {
						return (
							<ReplyComment
								key={reply.id}
								id={reply.id}
								nickname={reply.nickname}
								content={reply.content}
								createAt={''}
								profileImg={''}
								isWriter={isUser}
								deleteComment={() => deleteReply(reply.id)}
							/>
						);
					})}
				</ul>
				{replyClicked && (
					<ReplyInput
						key={id}
						contents={contents}
						addComment={addReply}
						onKeyPress={onKeyPress}
						onChangeHandler={onChangeHandler}
						onClickInput={onClickInput}
					/>
				)}
			</section>
		</S.Comment>
	);
};

export default Comment;
