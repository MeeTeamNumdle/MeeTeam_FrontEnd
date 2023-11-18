import styled from 'styled-components';
import { SlArrowRight } from 'react-icons/sl';

const ProgressBarRow = styled.div`
	display: flex;
	align-items: center;
	margin-top: 2.552vw;
	margin-bottom: 2.708vw;
	margin-left: 15.052vw;
	margin-right: 15.052vw;
	gap: 0.95vw;
`;

const ProgressBarBox = styled.div<{ $color?: boolean }>`
	display: flex;
	width: 11.979vw;
	height: 3.385vw;
	justify-content: center;
	align-items: center;
	border-radius: 0.417vw;
	background: ${props => (props.$color ? '#5877FC' : '#eeecff')};
	color: var(--light-black, ${props => (props.$color ? '#FFFFFF' : '#373f41')});
	font-family: Pretendard;
	font-size: 1.1rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.125rem; /* 75% */
	letter-spacing: 0.0125rem;
`;
const ProgressBarButton = styled(ProgressBarBox)`
	margin-left: 30.885vw;
`;

const ProgressBarIcon = styled(SlArrowRight)`
	width: 1rem;
	height: 1rem;
	stroke-width: 2rem;
	stroke: #000;
`;

const S = { ProgressBarRow, ProgressBarBox, ProgressBarButton, ProgressBarIcon };

export default S;
