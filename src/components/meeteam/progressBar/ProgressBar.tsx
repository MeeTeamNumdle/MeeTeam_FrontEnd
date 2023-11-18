import React, { useEffect, useState } from 'react';
import S from './ProgressBar.styled';

const ProgressBar = () => {
	type STATUS = '진행중' | '진행 완료' | '구인 하기' | '구인중';

	const [status, setStatus] = useState('진행중');

	useEffect(() => {
		setStatus(status);
	}, [status]);

	const checkColorChange = (statusType: STATUS) => statusType === status;

	return (
		<S.ProgressBarRow>
			<S.ProgressBarBox $color={checkColorChange('진행중')}>진행중</S.ProgressBarBox>
			<S.ProgressBarIcon />
			<S.ProgressBarBox $color={checkColorChange('진행 완료')}>진행 완료</S.ProgressBarBox>
			<S.ProgressBarButton $color={checkColorChange('구인 하기')}>구인 하기</S.ProgressBarButton>
		</S.ProgressBarRow>
	);
};

export default ProgressBar;
