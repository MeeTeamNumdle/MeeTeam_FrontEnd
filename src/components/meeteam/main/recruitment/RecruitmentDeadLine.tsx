import React, { useState } from 'react';
import S from './Recruitment.styeld';
// import { recruitmentInformation, DeadlineSelect } from '../../..';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { recruitmentInformationEditState, recruitmentState, deadlineState } from '../../../../atom';

const RecruitmentDeadLine = () => {
	const [editMode, setEditMode] = useState(false);
	const deadLine = useRecoilValue(deadlineState);

	const year = deadLine?.getFullYear();
	const month = (deadLine?.getMonth() + 1).toString().padStart(2, '0');
	const date = deadLine?.getDate().toString().padStart(2, '0');

	const [recruitment, setRecruitment] = useRecoilState(recruitmentState);
	const setRecruitmentInformationEdit = useSetRecoilState(recruitmentInformationEditState);

	const startRecruit = () => {
		setRecruitment(true);
		setEditMode(true);
		setRecruitmentInformationEdit(true);
	};

	return (
		<S.RecruitmentArticle>
			<h2 className='main--big-text'>{recruitment ? '마감일' : '구인'}</h2>
			{recruitment ? (
				editMode ? (
					<>
						{/* <DeadlineSelect type='밋팀 관리 페이지' /> */}
						<div className='recruitment__button-row'>
							<S.RecruitmentCancelButton type='button' onClick={() => setEditMode(false)}>
								취소
							</S.RecruitmentCancelButton>
							<S.RecruitmentSaveButton onClick={() => setEditMode(false)}>
								저장하기
							</S.RecruitmentSaveButton>
						</div>
					</>
				) : (
					<>
						<div>
							~ {year}년 {month}월 {date}일
						</div>
						<div className='recruitment__button-row'>
							<S.RecruitmentCorrectButton type='button' onClick={() => setEditMode(true)}>
								수정 하기
							</S.RecruitmentCorrectButton>
							<S.RecruitmentEndButton>구인 종료</S.RecruitmentEndButton>
						</div>
					</>
				)
			) : (
				<>
					<div>아직까지 함께 할 사람들을 못찾았다면? 함께 할 사람들을 찾을 수 있습니다!</div>
					<div className='recruitment__button-row'>
						<S.RecruitmentButton type='button' onClick={startRecruit}>
							구인하기
						</S.RecruitmentButton>
					</div>
				</>
			)}
		</S.RecruitmentArticle>
	);
};

export default RecruitmentDeadLine;
