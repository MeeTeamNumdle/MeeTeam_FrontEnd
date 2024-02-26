import React, { useEffect, useState } from 'react';
import S from './OptionMenu.styled';

const Option = ({ children }: { children: string }) => {
	const [isClicked, setIsClicked] = useState<boolean>(false);

	const onClickOption = () => {
		setIsClicked(prev => !prev);
	};

	useEffect(() => {
		if (children === '전체') {
			setIsClicked(true);
		}
	}, []);
	return (
		<S.Option $isClick={isClicked} onClick={onClickOption}>
			{children}
		</S.Option>
	);
};

export default Option;
