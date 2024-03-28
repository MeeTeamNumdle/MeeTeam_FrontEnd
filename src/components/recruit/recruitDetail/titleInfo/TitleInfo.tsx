import React, { useState } from 'react';
import { ProfileImage } from '../../..';
import { TitleAndEtc } from '../../../../types';
import S from './TitleInfo.styled';
import { FilledBookmark, UnfilledBookmark } from '../../../../assets';
import { useBookmark } from '../../../../hooks';
import { useDelBookmark } from '../../../../hooks/useBookMark';
import { useMutation } from '@tanstack/react-query';
import { bookmarkDelete } from '../../../../service/recruit/detail';

type scores = {
	[key: number]: string;
};

const scoreObj: scores = {
	4.5: 'A+',
	4.0: 'A',
	3.5: 'B+',
	3.0: 'B',
};

const PAGE_NUMBER = 2;

const TitleInfo = ({
	nickname,
	responseRate,
	createdAt,
	title,
	writerProfileImg,
	bookmarkCount,
	writerScore,
}: TitleAndEtc) => {
	const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
	const { mutate: bookmarked } = useBookmark();
	// const { mutate: unBookmarked } = useDelBookmark();
	const delBookmark = useMutation({
		mutationFn: (id: number) => bookmarkDelete(id),
	});

	const onClickBookmark = () => {
		if (!isBookmarked) {
			bookmarked(PAGE_NUMBER);
		} else {
			// unBookmarked(PAGE_NUMBER);
			delBookmark.mutate(PAGE_NUMBER);
		}
		setIsBookmarked(prev => !prev);
	};
	return (
		<S.TitleInfo>
			<section className='container-header'>
				<section className='container-header__profile'>
					<ProfileImage size='3.3075rem' nickname={nickname} url={writerProfileImg} />
					<span>{nickname}</span>
				</section>
				<span className='bubble first'>응답률 {responseRate}%</span>
				<span className='bubble'>평점 {writerScore.toFixed(1)}</span>
				<span className='date'>{createdAt}</span>
				<section className='container-bookmark'>
					<img src={isBookmarked ? FilledBookmark : UnfilledBookmark} onClick={onClickBookmark} />
					<span className='count-bookmark'>{bookmarkCount}</span>
				</section>
			</section>
			<h1>{title}</h1>
		</S.TitleInfo>
	);
};

export default TitleInfo;
