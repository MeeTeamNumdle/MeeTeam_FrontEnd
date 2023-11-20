import styled from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';

const MemberProfileIcon = styled(BsPersonCircle)`
	width: 3.281vw;
	height: 3.281vw;
	color: #878787;
	padding-left: 0.781vw;
	padding-right: 0.781vw;
`;

const MemberRadioLabel = styled.label`
	display: flex;
	align-items: center;
	padding: 0.781vw;
`;

const MemberButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 2.604vw;
	margin-right: 2.604vw;
	width: 3.646vw;
	height: 1.823vw;
	background-color: transparent;
	border-radius: 0.417vw;
	border: 0.072vw solid #f88;
`;

const S = { MemberProfileIcon, MemberRadioLabel, MemberButton };

export default S;
