import styled from 'styled-components';
import { SlOptionsVertical } from 'react-icons/sl';

const InformationGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 2.604vw;
	row-gap: 2.604vw;
`;

const InformationRow = styled.div`
	display: flex;
	align-items: center;
	gap: 1.302vw;
`;

const InformationTitle = styled.div`
	color: #000;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 600;
	line-height: 3.5rem; /* 175% */
	letter-spacing: 0.0125rem;
`;

const InformationHead = styled.h1`
	color: #000;
	font-size: 1.2rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.5rem; /* 100% */
	letter-spacing: -0.03rem;
	margin-bottom: 0.521vw;
`;

const InformationParagraph = styled.pre`
	color: #373f41;
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: 150%; /* 1.875rem */
	letter-spacing: 0.0125rem;
	white-space: pre-wrap;
`;

const InformationStatusIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 4.375vw;
	height: 1.823vw;
	border-radius: 0.417vw;
	background: linear-gradient(90deg, #4e99ef -6.72%, #723dff 107.8%);
	color: #fff;
	font-size: 0.8rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1rem; /* 112.5% */
`;

const InformationOptionIcon = styled(SlOptionsVertical)`
	margin-left: 62.44vw;
`;

const S = {
	InformationGrid,
	InformationRow,
	InformationTitle,
	InformationHead,
	InformationParagraph,
	InformationStatusIcon,
	InformationOptionIcon,
};

export default S;
