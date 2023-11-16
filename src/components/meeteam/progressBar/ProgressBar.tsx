import React, { useEffect, useState } from 'react';
import S from './ProgressBar.styled';

const ProgressBar = () => {
	const [status, setStatus] = useState('진행중');
	enum STATUS {
		recruit = '구인중',
		ongoing = '진행중',
		done = '진행 완료',
	}

	useEffect(() => {
		setStatus(status);
	}, [status]);

	const checkColorChange = (statusType: string) => statusType === status;

	return (
		<S.ProgressBarRow>
			<S.ProgressBarBox color={checkColorChange(STATUS.recruit)}>{STATUS.recruit}</S.ProgressBarBox>
			<S.ProgressBarIcon />
			<S.ProgressBarBox color={checkColorChange(STATUS.ongoing)}>{STATUS.ongoing}</S.ProgressBarBox>
			<S.ProgressBarIcon />
			<S.ProgressBarBox color={checkColorChange(STATUS.done)}>{STATUS.done}</S.ProgressBarBox>
		</S.ProgressBarRow>
	);
};

export default ProgressBar;
