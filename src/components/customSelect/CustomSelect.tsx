import { useState } from 'react';
import S from './CustomSelect.styled';
import { useRecoilState } from 'recoil';
import { areaState, categoryState, fieldState } from '../../atom';

export interface ICustomSelect {
	optionData: string[];
	$isMember?: boolean;
	key?: number;
	type?: string;
}

const CustomSelect = ({ optionData, $isMember, type }: ICustomSelect) => {
	const [currentValue, setCurrentValue] = useState('선택');
	const [showOptions, setShowOptions] = useState(false);
	const [area, setArea] = useRecoilState(areaState);
	const [field, setField] = useRecoilState(fieldState);
	const [category, setCategory] = useRecoilState(categoryState);

	const handleOnChangeSelectValue = (event: React.MouseEvent<HTMLElement>) => {
		const { innerText } = event.target as HTMLElement;
		setCurrentValue(innerText);

		if (type === '범위') {
			setArea(innerText);
		}
		if (type === '분야') {
			setField(innerText);
		}
		if (type === '유형') {
			setCategory(innerText);
		}
	};

	const onClickhandler = () => {
		setShowOptions(prev => !prev);
	};

	return (
		<S.CustomSelect onClick={onClickhandler} $isMember={$isMember} $show={showOptions}>
			<S.Label $isSelected={currentValue}>{currentValue}</S.Label>
			<S.SelectOptions $show={showOptions}>
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
