import React, { ReactNode } from 'react';
import S from './ModalBackground.styled';

interface ModalBackgroundProps {
	children: ReactNode;
}

const ModalBackground = ({ children }: ModalBackgroundProps) => {
	return <S.ModalBackground>{children}</S.ModalBackground>;
};

export default ModalBackground;
