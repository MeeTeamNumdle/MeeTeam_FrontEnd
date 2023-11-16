import styled from 'styled-components';
import { SlArrowRight } from 'react-icons/sl';

const ProgressBarRow = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 1.5rem;
`;

const ProgressBarBox = styled.div<{ color?: boolean }>`
	display: flex;
	width: 14.375rem;
	height: 4.0625rem;
	padding: 0.625rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	border-radius: 0.5rem;
	background: ${props => (props.color ? '#5877FC' : '#eeecff')};
	color: var(--light-black, ${props => (props.color ? '#FFFFFF' : '#373f41')});
	font-family: Pretendard;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.125rem; /* 75% */
	letter-spacing: 0.0125rem;
`;

const ProgressBarIcon = styled(SlArrowRight)`
	width: 1rem;
	height: 1rem;
	stroke-width: 2rem;
	stroke: #000;
`;

const S = { ProgressBarRow, ProgressBarBox, ProgressBarIcon };

export default S;
