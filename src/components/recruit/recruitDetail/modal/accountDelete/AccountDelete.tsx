import React from 'react';
import S from '../applyClose/ApplyClose.styled';
import { useSetRecoilState } from 'recoil';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { warningModalWithdrawState, loginState, userState } from '../../../../../atom';
import { withdrawAccount } from '../../../../../service';
import secureLocalStorage from 'react-secure-storage';

const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY;
const REFRESH_TOKEN_KEY = import.meta.env.VITE_REFRESH_TOKEN_KEY;
const PLATFORM_ID = import.meta.env.VITE_PLATFORM_ID;

const AccountDelete = () => {
	const setUserState = useSetRecoilState(userState);
	const setLoginState = useSetRecoilState(loginState);
	const setModalState = useSetRecoilState(warningModalWithdrawState);
	const queryClient = useQueryClient();
	const withdraw = useMutation({
		mutationFn: () => withdrawAccount(),
		onSuccess: () => {
			setModalState(false);
			setLoginState(false);
			setUserState(null);
			queryClient.clear();
			secureLocalStorage.removeItem(ACCESS_TOKEN_KEY);
			secureLocalStorage.removeItem(REFRESH_TOKEN_KEY);
			secureLocalStorage.removeItem(PLATFORM_ID);
		},
	});

	const onClickCancel = () => {
		setModalState(false);
	};
	const onClickDelete = () => {
		withdraw.mutate();
	};

	return (
		<S.ApplyClose>
			<h3 className='h3'>계정 탈퇴</h3>
			<section className='description'>
				<span className='body2-medium'>계정을 탈퇴하게 되면</span>
				<span className='body2-medium'>복구하실 수 없습니다.</span>
				<span className='body2-medium'>그래도 탈퇴하시겠습니까?</span>
			</section>
			<section className='btn-container'>
				<button className='cancel btn-txt' onClick={onClickCancel}>
					아니요.
				</button>
				<button className='confirm btn-txt' onClick={onClickDelete}>
					네, 탈퇴합니다.
				</button>
			</section>
		</S.ApplyClose>
	);
};

export default AccountDelete;
