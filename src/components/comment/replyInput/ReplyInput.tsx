import React, { useState } from 'react';
import { ProfileImage } from '../..';
import S from './ReplyInput.styled';
import { Reply } from '../../../assets';
import { useComment } from '../../../hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../atom';

interface ReplyHandler {
	pageNum: number;
	groupNumber: number;
	onClickCancel: () => void;
	replyInputHandler: () => void;
}

const ReplyInput = ({ pageNum, groupNumber, onClickCancel, replyInputHandler }: ReplyHandler) => {
	const postComment = useComment();
	const queryClient = useQueryClient();
	const [contents, setContents] = useState<string>('');
	const userInfo = useRecoilValue(userState);

	const addReply = () => {
		if (contents.trim() !== '') {
			const comment = {
				content: contents,
				isParent: false,
				groupNumber: groupNumber,
			};
			setContents('');
			postComment.mutate(
				{
					pageNum,
					comment,
				},
				{
					onSuccess: () => {
						replyInputHandler();
						queryClient.invalidateQueries({ queryKey: ['detailedPage'] });
					},
				}
			);
		}
	};

	const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContents(event.target.value);
	};

	return (
		<React.Fragment>
			<S.ReplyInput>
				<img className='reply-icon' src={Reply} alt='답변 아이콘' />
				<article className='wrapper-reply__input'>
					<section className='container-user__icon'>
						<div>
							{userInfo?.userId && (
								<ProfileImage url={userInfo?.imageUrl} userId={userInfo?.userId} size='2.31rem' />
							)}
						</div>
						<span>{userInfo?.nickname}</span>
					</section>
					<section className='container-user__input'>
						<textarea
							value={contents}
							onChange={onChangeHandler}
							maxLength={1000}
							placeholder='답글을 입력해주세요.'
						/>
					</section>
					<section className='container-btn'>
						<button type='button' className='cancel-btn' onClick={onClickCancel}>
							취소
						</button>
						<button type='button' onClick={addReply} className='submit-btn'>
							저장
						</button>
					</section>
				</article>
			</S.ReplyInput>
			<hr />
		</React.Fragment>
	);
};

export default ReplyInput;
