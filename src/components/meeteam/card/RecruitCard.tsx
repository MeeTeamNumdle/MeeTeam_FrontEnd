import React, { useState } from 'react';
import S from './Card.styled';
import { useNavigate } from 'react-router-dom';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';

const RecruitCard = () => {
	const navigate = useNavigate();
	const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

	const onClickContent = () => {
		navigate('/recruit/1');
	};

	const onClickBookmark = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		setIsBookmarked(prev => !prev);
	};
	return (
		<S.RecruitCard onClick={onClickContent}>
			<div className='content-tags'>
				<div className='tags'>
					<div>교외</div>
					<div>프로젝트</div>
				</div>
				<div onClick={onClickBookmark}>
					{isBookmarked ? (
						<FaBookmark className='bookmark' />
					) : (
						<FaRegBookmark className='bookmark' />
					)}
				</div>
			</div>
			<div className='content-title'>
				[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
			</div>
			<div className='content-info'>
				<div>🚨 마감 1일 전</div>
			</div>
		</S.RecruitCard>
	);
};

export default React.memo(RecruitCard);
