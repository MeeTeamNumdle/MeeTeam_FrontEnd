import React from 'react';
import S from './CompleteSignUpPage.styled';
import { PrimaryBtn } from '../../../components';
import { Congratulation } from '../../../assets';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState, signupModalState } from '../../../atom';

const CompleteSignUpPage = () => {
	const navigate = useNavigate();
	const user = useRecoilValue(userState);
	const setSignupModalOpen = useSetRecoilState(signupModalState);

	const handleClick = () => {
		setSignupModalOpen(true);
		navigate('/', {
			state: {
				userId: user?.userId,
			},
			replace: true,
		});
	};

	return (
		<S.CompleteSignUpLayout>
			<header className='account__header'>
				<h1>밋팀에서 팀을 만날 수 있어요!</h1>
			</header>
			<img src={Congratulation} alt='회원가입을 축하합니다!' fetchpriority='high' />
			<div>
				<PrimaryBtn title='확인' type='button' handleClick={() => handleClick()} />
			</div>
		</S.CompleteSignUpLayout>
	);
};

export default CompleteSignUpPage;
