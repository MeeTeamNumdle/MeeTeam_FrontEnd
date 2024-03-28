import React from 'react';
import { Icon, ProfileImage } from '../..';
import { CommentInputFunctions } from '../../../types';
import S from './CommentInput.styled';

const CommentInput = ({
	contents,
	addComment,
	onKeyPress,
	onChangeHandler,
	onClickInput,
}: CommentInputFunctions) => {
	const isLogin = true; // 임시 코드

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<S.CommentInput>
			<form onSubmit={onSubmit}>
				<article className='wrapper'>
					<section className='container-user__icon'>
						<div>
							<ProfileImage url='' nickname={'yeom'} size='2.31rem' />
						</div>
						<span>{'nayeahyo'}</span>
					</section>
					<section className='container-user__input'>
						<input
							type='text'
							onKeyPress={onKeyPress}
							value={contents}
							onChange={onChangeHandler}
							onClick={onClickInput}
							placeholder={isLogin ? '댓글쓰기' : '로그인이 필요합니다.'}
						/>
					</section>
					<section className='container-btn'>
						<button type='submit' onClick={addComment} className='submit-btn'>
							댓글
						</button>
					</section>
				</article>
			</form>
		</S.CommentInput>
	);
};

export default CommentInput;
