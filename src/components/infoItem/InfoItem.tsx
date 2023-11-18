import { Dot, CustomSelect } from '..';
import S from './InfoItem.styled';

interface IInfoItem {
	isDot: string;
	title: string;
	optionData: string[];
}

const InfoItem = (props: IInfoItem) => {
	return (
		<S.InfoItem>
			<span>{props.title}</span>
			{props.isDot === 'true' && <Dot />}
			<CustomSelect optionData={props.optionData} />
		</S.InfoItem>
	);
};

export default InfoItem;
