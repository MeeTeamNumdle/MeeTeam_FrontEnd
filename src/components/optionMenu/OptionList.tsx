import React from 'react';
import { Option } from '..';
import S from './OptionMenu.styled';
import { OptionLists } from '../../types';

const OptionList = ({ options }: OptionLists) => {
	return (
		<S.OptionList>
			{options.map(option => (
				<Option>{option}</Option>
			))}
		</S.OptionList>
	);
};

export default OptionList;
