import styled from 'styled-components';
import { SlOptionsVertical } from 'react-icons/sl';

const InformationGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 2.604vw;
`;

const InformationTitle = styled.div`
	color: #000;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 600;
	line-height: 3.5rem; /* 175% */
	letter-spacing: 0.0125rem;
`;

const InformationSection = styled.section`
	padding-top: 1.302vw;
	padding-bottom: 1.302vw;
`;

const InformationHead = styled.h1`
	color: #000;
	font-size: 1.2rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.5rem; /* 100% */
	letter-spacing: -0.03rem;
	margin-bottom: 0.521vw;
`;

const InformationParagraph = styled.p`
	color: #373f41;
	font-size: 1rem;
	font-style: normal;
	font-weight: 500;
	line-height: 150%; /* 1.875rem */
	letter-spacing: 0.0125rem;
`;

const InformationOptionIcon = styled(SlOptionsVertical)`
	margin-left: 62.44vw;
`;

const S = {
	InformationGrid,
	InformationTitle,
	InformationSection,
	InformationHead,
	InformationParagraph,
	InformationOptionIcon,
};

export default S;
