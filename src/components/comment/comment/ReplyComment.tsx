import React, { useState } from 'react';
import S from './ReplyComment.styled';
import { KebabMenu, ProfileImage } from '../..';
import { Comment } from '../../../types';
import { Reply } from '../../../assets';

const ReplyComment = ({
	id,
	nickname,
	content,
	deleteComment,
	isWriter,
	createAt,
	profileImg,
}: Comment) => {
	const isLogin = true; // 임시 코드
	const [value, setValue] = useState<string>(content);
	const [showKebab, setShowKebab] = useState<boolean>(true);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const isValid = isLogin && nickname === 'yeom' && showKebab;
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

	const editComment = () => {
		setIsEdit(false);
		setShowKebab(true);
	};

	const onChangeEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const onKeyPressEdit = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			editComment();
		}
	};
	return (
		<S.ReplyComment>
			<section className='wrapper'>
				<img className='reply-icon' src={Reply} />
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
		</S.ReplyComment>
	);
};

export default ReplyComment;
