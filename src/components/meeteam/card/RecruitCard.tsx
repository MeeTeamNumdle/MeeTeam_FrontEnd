import React, { useState } from 'react';
import S from './Card.styled';
import { useNavigate } from 'react-router-dom';
import { FilledBookmark, UnfilledBookmark } from '../../../assets';
import { ProfileImage } from '../..';
import { Post } from '../../../types';
import { useBookmark } from '../../../hooks';
import { useDelBookmark } from '../../../hooks/useBookMark';

const RecruitCard = ({
	id,
	title,
	category,
	writerNickname,
	writerProfileImg,
	deadline,
	scope,
	isBookmarked,
	writerId,
	isClosed,
}: Post) => {
	const navigate = useNavigate();

	const { mutate: bookmarked } = useBookmark({ queryKey: 'recruit_board' });
	const { mutate: unBookmarked } = useDelBookmark({ queryKey: 'recruit_board' });

	const onClickContent = () => {
		navigate(`/recruitment/postings/${id}`);
	};

	const onClickBookmark = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		if (!isBookmarked) {
			bookmarked(Number(id));
		} else {
			unBookmarked(Number(id));
		}
	};

	return (
		<S.RecruitCard onClick={onClickContent} $isClosed={isClosed}>
			<section className='content-tags'>
				<section className='header'>
					<section className='tags'>
						<article className='tag scope'>{scope}</article>
						<article className='tag category'>{category}</article>
					</section>
					<section onClick={onClickBookmark}>
						<img src={isBookmarked ? FilledBookmark : UnfilledBookmark} />
					</section>
				</section>
				<article className='content-title'>{title}</article>
			</section>
			<section className='content-info'>
				<section className='user'>
					<ProfileImage userId={writerId} size='2.31rem' url={writerProfileImg} />
					<span>{writerNickname}</span>
				</section>
				{isClosed ? (
					<span className='closed txt2'>모집마감</span>
				) : (
					<span className='date'>~ {deadline}</span>
				)}
			</section>
		</S.RecruitCard>
	);
};

export default React.memo(RecruitCard);
