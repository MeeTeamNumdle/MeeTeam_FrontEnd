import styled from 'styled-components';

const SettingRow = styled.div`
	display: flex;
	column-gap: 1.302vw;
	margin-top: 0.781vw;
	margin-bottom: 0.781vw;
`;

const SettingGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 2.604vw;
`;

const SettingHead = styled.h1`
	color: #000;
	font-size: 1.2rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.5rem; /* 100% */
	letter-spacing: -0.03rem;
	margin-bottom: 0.521vw;
`;

const SettingParagraph = styled.p`
	color: #373f41;
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: 150%; /* 1.875rem */
	letter-spacing: 0.0125rem;
`;

const SettingChangeButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 8.438vw;
	height: 2.604vw;
	border-radius: 0.417vw;
	border: 0.072vw solid #5877fc;
	background-color: transparent;
	color: var(--light-black, #373f41);
	font-size: 1rem;
	font-style: normal;
	font-weight: 500;
	letter-spacing: 0.0125rem;
	cursor: pointer;
`;

const SettingRangeToggle = styled.input``;

const SettingStopButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0;
	width: 11.458vw;
	height: 2.604vw;
	border-radius: 0.417vw;
	background: #f88;
	color: #fff;
	font-family: Pretendard;
	font-size: 1rem;
	font-style: normal;
	font-weight: 500;
	letter-spacing: 0.0125rem;
	margin: 1.302vw auto;
	cursor: pointer;
`;

const S = {
	SettingRow,
	SettingGrid,
	SettingHead,
	SettingParagraph,
	SettingChangeButton,
	SettingRangeToggle,
	SettingStopButton,
};

export default S;
