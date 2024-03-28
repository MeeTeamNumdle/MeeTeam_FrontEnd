import React from 'react';
import { Comment } from '../../..';

const RecruitComments = () => {
	return (
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
	);
};

export default RecruitComments;
