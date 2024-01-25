import React, { useEffect } from 'react';
import S from './NaverLogin.styled';

const NaverLogin = () => {
	const initializeNaverLogin = () => {
		const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
			import.meta.env.VITE_NAVER_CLIENT_ID
		}&state=${import.meta.env.VITE_NAVER_STATE}&redirect_uri=${
			import.meta.env.VITE_NAVER_CALLBACK_URL
		}`;

		window.location.href = NAVER_AUTH_URL;
	};

	const getAuthCode = () => {
		const urlParams = new URLSearchParams(window.location.search);
		return urlParams.get('code');
	};

	useEffect(() => {
		const code = getAuthCode();
	}, []);


	return (
		<S.NaverCustomButton onClick={initializeNaverLogin}>
			<img src='/src/assets/NaverIcon.png' className='sign-in__naver-icon' alt='naverIcon' />
			<span>네이버 로그인</span>
		</S.NaverCustomButton>
	);
};

export default NaverLogin;
