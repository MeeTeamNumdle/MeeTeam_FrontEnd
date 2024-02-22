import React, { useState } from 'react';
import { Icon, KebabMenu } from '../..';
import S from './Comment.styled';
import { Comment } from '../../../types';
import { ReplyInput } from '../../index';

let addedCmtId;

const Comment = ({ id, username, content, depth }: Comment) => {
	const isLogin = true; // 임시 코드
	const [replyList, setReplyList] = useState<Comment[]>([]);
	const [replyClicked, setReplyClicked] = useState<boolean>(false);
	const [contents, setContents] = useState<string>('');
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const optionLists = [
		{
			title: '수정',
			optionClickHandler: () => setIsOpen(true),
		},
		{
			title: '삭제',
			optionClickHandler: () => setIsOpen(true),
		},
	];

	const handleReplyClick = () => {
		setReplyClicked(true);
	};

	const addComment = () => {
		if (contents !== '') {
			if (replyList.length === 0) {
				addedCmtId = 0;
			} else {
				const lastCmtIndex = replyList.length - 1;
				addedCmtId = replyList[lastCmtIndex].id + 1;
			}
			const newComment = {
				id: addedCmtId,
				username: 'yeom',
				content: contents,
			};
			setReplyList([...replyList, newComment]);
			setContents('');
		}
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

	const onClickInput = () => {
		if (!isLogin) {
			// 로그인 페이지로 이동
			// navigate('/login');
		}
	};

	return (
		<S.Comment key={id} depth={depth}>
			<section className='wrapper'>
				<section className='container'>
					<div className='comment-icon'>
						<Icon />
					</div>
					<div className='comment-info'>
						<span>{username}</span>
						<span>{content}</span>
					</div>
					{depth !== 1 && (
						<button type='button' onClick={handleReplyClick} className='reply-btn'>
							답글
						</button>
					)}
				</section>
				<div>
					<KebabMenu options={optionLists} />
				</div>
			</section>
			<section>
				<ul className='container-reply__lists'>
					{replyList?.map(reply => {
						return (
							<Comment
								key={reply.id}
								id={reply.id}
								username={reply.username}
								content={reply.content}
								depth={1}
							/>
						);
					})}
				</ul>
				{replyClicked && (
					<ReplyInput
						key={id}
						contents={contents}
						addComment={addComment}
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
