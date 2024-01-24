import React from 'react';
import S from './NickNameSettingPage.styled';
import { SIGN_UP_DATA } from '../SignUpData';

const NickNameSettingPage = () => {
	const title = `밋팀에서 사용하실\n닉네임을 설정해주세요`;
	return (
		<S.NickNameSettingPageLayout>
			<header className='account__header'>
				<h1>{title}</h1>
			</header>
			<S.NickNameSettingPageForm>
				{SIGN_UP_DATA.map(
					({ type, placeholder, name }, index) =>
						name === 'nickName' && (
							<label className='account__label' key={index}>
								<input
									className='account__input'
									type={type}
									placeholder={placeholder}
									name={name}
								/>
							</label>
						)
				)}
				<S.NickNameSettingButton type='submit'>확인</S.NickNameSettingButton>
			</S.NickNameSettingPageForm>
		</S.NickNameSettingPageLayout>
	);
};
export default NickNameSettingPage;
