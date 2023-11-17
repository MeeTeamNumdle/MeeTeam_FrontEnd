import { Dot } from '..';
import S from './InfoItem.styled';

interface IInfoItem {
	isDot: string;
	title: string;
}

const InfoItem = (props: IInfoItem) => {
	return (
		<S.InfoItem>
			<span>{props.title}</span>
			{props.isDot && <Dot />}
			<div>
				<input placeholder='밋팀 팀명을 입력해주세요.' type='text' />
			</div>
		</S.InfoItem>
	);
};

export default InfoItem;
