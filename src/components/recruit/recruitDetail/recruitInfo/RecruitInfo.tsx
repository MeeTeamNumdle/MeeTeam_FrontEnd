import React from 'react';
import { RecruitInfo } from '../../../../types';
import S from './RecruitInfo.styled';

const RecruitInfo = ({
	deadline,
	period,
	scope,
	courseName,
	category,
	proceedType,
	courseProfessor,
	dDay,
}: RecruitInfo) => {
	return (
		<S.RecruitInfo className='wrapper-info'>
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
						<span>{`마감 ${dDay}일 전`}</span>
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
