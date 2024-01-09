import { Dot, CustomSelect, Subtitle, DeadlineSelect } from '..';
import DateSelect from '../dateSelect/DateSelect';
import S from './InfoItem.styled';

interface IInfoItem {
	isDot: string;
	title: string;
	optionData: string[];
	type?: string;
}

const InfoItem = (props: IInfoItem) => {
	return (
		<S.InfoItem>
			<Subtitle>{props.title}</Subtitle>
			{props.isDot === 'true' && <Dot />}
			{props.title === '기간' ? (
				<DateSelect />
			) : props.title === '구인 마감일' ? (
				<DeadlineSelect />
			) : (
				<CustomSelect optionData={props.optionData} type={props.type} />
			)}
		</S.InfoItem>
	);
};

export default InfoItem;
