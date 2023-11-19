import styled from 'styled-components';
import { SlOptionsVertical } from 'react-icons/sl';

const InformationColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

const InformationGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const InformationTitle = styled.div`
	color: #000;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 600;
	line-height: 3.5rem; /* 175% */
	letter-spacing: 0.0125rem;
	padding-top: 1.302vw;
	padding-bottom: 1.302vw;
	padding-left: 2.604vw;
	paddings-right: 2.604vw;
`;

const InformationSection = styled.section`
	padding-left: 2.604vw;
	padding-right: 2.604vw;
	padding-bottom: 2.604vw;
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
	margin-top: 2.604vw;
	margin-left: 65.044vw;
	margin-right: 2.604vw;
`;

const S = {
	InformationColumn,
	InformationGrid,
	InformationTitle,
	InformationSection,
	InformationHead,
	InformationParagraph,
	InformationOptionIcon,
};

export default S;
