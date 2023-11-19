import { useState } from 'react';
import S from './CustomSelect.styled';

interface ICustomSelect {
	optionData: string[];
}

const CustomSelect = ({ optionData }: ICustomSelect) => {
	const [currentValue, setCurrentValue] = useState('선택');
	const [showOptions, setShowOptions] = useState(false);

	const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLElement>) => {
		const { innerText } = e.target as HTMLElement;
		setCurrentValue(innerText);
	};

	return (
		<S.CustomSelect onClick={() => setShowOptions(prev => !prev)}>
			<S.Label>{currentValue}</S.Label>
			<S.SelectOptions show={showOptions}>
				{optionData.map((data: any, index: number) => (
					<S.Option key={index} value={data} onClick={handleOnChangeSelectValue}>
						{data}
					</S.Option>
				))}
			</S.SelectOptions>
		</S.CustomSelect>
	);
};

export default CustomSelect;
