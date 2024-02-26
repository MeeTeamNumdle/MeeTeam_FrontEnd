import React from 'react';
import S from './OptionMenu.styled';

const Option = ({ children }: { children: string }) => {
	return <S.Option>{children}</S.Option>;
};

export default Option;
