import { Dot, CustomSelect } from '..';
import DateSelect from '../dateSelect/DateSelect';
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
			{props.title === '밋팀 기간' ? (
				<DateSelect />
			) : (
				<CustomSelect optionData={props.optionData} />
			)}
		</S.InfoItem>
	);
};

export default InfoItem;
