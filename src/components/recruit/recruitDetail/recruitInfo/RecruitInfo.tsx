import React, { useEffect, useState } from 'react';
import { RecruitInfo as RecruitInformation } from '../../../../types';
import S from './RecruitInfo.styled';
import { formatDistance } from 'date-fns';
import { ko } from 'date-fns/locale';

const RecruitInfo = ({
	deadline,
	period,
	scope,
	courseName,
	category,
	proceedType,
	courseProfessor,
	dDay,
	isClosed,
}: RecruitInformation) => {
	const convertedDeadline = new Date(deadline + 'T23:59:59');
	const now = new Date();

	const countDown = formatDistance(convertedDeadline, now, { locale: ko });

	return (
		<S.RecruitInfo>
			<section className='container-info'>
				<section className='subtitles'>
					<span>구인마감</span>
					<span>범위</span>
					<span>진행기간</span>
					<span>수업명</span>
				</section>
				<section className='values'>
					<section>
						<span>{deadline}</span>
						{!isClosed && dDay && (
							<span className='recruiting'>
								{dDay === '1' && `마감 ${countDown} 전`}
								{dDay > '1' && `마감 ${countDown} 전`}
							</span>
						)}
					</section>
					<span>{scope}</span>
					<span>{period}</span>
					<span>{courseName ? courseName : '-'}</span>
				</section>
			</section>
			<section className='container-info'>
				<section className='subtitles'>
					<span>유형</span>
					<span>진행방식</span>
					<span>교수명</span>
				</section>
				<section className='values'>
					<span>{category}</span>
					<span>{proceedType}</span>
					<span>{courseProfessor !== null ? courseProfessor : '-'}</span>
				</section>
			</section>
		</S.RecruitInfo>
	);
};

export default RecruitInfo;
