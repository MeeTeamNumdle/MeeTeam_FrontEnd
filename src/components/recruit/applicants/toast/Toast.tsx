import React, { useState, useEffect } from 'react';
import S from './Toast.styled';
import { Alert } from '../../../../assets';
import { useSetRecoilState } from 'recoil';
import { toastState } from '../../../../atom';

interface ToastInfo {
	message: string;
}

const Toast = ({ message }: ToastInfo) => {
	const [isOpen, setIsOpen] = useState(false);
	const setIsToast = useSetRecoilState(toastState);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsOpen(false);
			setIsToast(false);
		}, 3000);

		return () => {
			clearTimeout(timeoutId);
			setIsOpen(true);
		};
	}, []);

	return (
		<S.ToastContainer isOpen={isOpen}>
			<img src={Alert} />
			<span className='body1-medium'>{message}</span>
		</S.ToastContainer>
	);
};

export default Toast;
