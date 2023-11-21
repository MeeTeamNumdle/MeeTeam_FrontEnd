import styled from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';

const MemberProfileIcon = styled(BsPersonCircle)`
	width: 3.281vw;
	height: 3.281vw;
	color: #878787;
`;

const MemberRadioLabel = styled.label`
	display: flex;
	align-items: center;
	padding: 0.781vw;
	column-gap: 0.781vw;
`;

const MemberRadioButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 1.302vw;
	margin-right: 1.302vw;
	width: 3.646vw;
	height: 1.823vw;
	background-color: transparent;
	border-radius: 0.417vw;
	border: 0.072vw solid #f88;
	cursor: pointer;
`;

const MemberColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3905vw;
`;

const MemberLayout = styled(MemberColumn)`
	row-gap: 2.604vw;

	.member__space-between-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.member__small-text {
		color: var(--light-black, #373f41);
		font-style: normal;
		font-weight: 400;
		letter-spacing: 0.0125rem;
		font-size: 0.7rem;
		text-overflow: ellipsis;
	}

	.member__middle-text {
		display: flex;
		align-items: center;
		color: var(--light-black, #373f41);
		font-style: normal;
		font-weight: 500;
		letter-spacing: 0.0125rem;
		font-size: 0.8rem;
		text-overflow: ellipsis;
	}

	.member__follow-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.521vw;
		gap: 0.313vw;
		border-radius: 0.417vw;
		background: #e0e5ff;
		color: var(--light-black, #373f41);
		font-style: normal;
		font-weight: 400;
		letter-spacing: 0.0125rem;
		font-size: 0.7rem;
		cursor: pointer;
	}

	.member__tag-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.521vw;
		border-radius: 5.208vw;
		border: 0.052vw solid #dcdcdc;
		background: #fff;
		color: var(--light-black, #373f41);
		font-style: normal;
		font-weight: 400;
		letter-spacing: 0.0125rem;
		font-size: 0.7rem;
	}
`;

const MemberRow = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.651vw;
	font-weight: 500;
	text-overflow: ellipsis;
	overflow: auto;
	white-space: nowrap;
	-ms-overflow-style: none; /* IE, Edge */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera */
	}
	color: var(--light-black, #373f41);
`;

const MemberHead = styled.h1`
	color: #000;
	font-size: 1.2rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.5rem; /* 100% */
	letter-spacing: -0.03rem;
	margin-bottom: 0.521vw;
`;

const MemberBox = styled(MemberColumn)`
	gap: 0.781vw;
	width: 17.813vw;
	height: 11.354vw;
	border-radius: 0.521vw;
	border: 0.052vw solid #dcdcdc;
	background: #f9f9f9;
	padding: 0.781vw;
`;

const MemberList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.781vw;
`;

const MemberItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 0.781vw;
	padding-right: 0.781vw;
	width: 37.083vw;
	height: 2.448vw;
	border-radius: 0.521vw;
	background: #f3f5ff;
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 0.0125rem;
	text-overflow: ellipsis;
`;

const MemberButton = styled.button<{ $clicked?: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 7.448vw;
	height: 2.188vw;
	border-radius: 5.208vw;
	color: ${props => (props.$clicked ? '#FFFFFF' : '#373F41')};
	background: ${props =>
		props.$clicked ? 'linear-gradient(90deg, #4ed2ef -11.45%, #723dff 139.25%)' : '#FFFFFF'};
	border: ${props => (props.$clicked ? 0 : 'solid #C5C5C5')};
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 0.0125rem;
	cursor: pointer;
`;

const S = {
	MemberProfileIcon,
	MemberRadioLabel,
	MemberRadioButton,
	MemberLayout,
	MemberRow,
	MemberColumn,
	MemberHead,
	MemberBox,
	MemberList,
	MemberItem,
	MemberButton,
};

export default S;
