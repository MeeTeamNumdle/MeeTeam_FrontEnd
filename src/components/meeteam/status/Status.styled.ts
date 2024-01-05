import styled from 'styled-components';

interface IStatus {
	$check?: boolean;
}

const Status = styled.div<IStatus>`
	display: flex;
	width: 17.25rem;
	height: 4.875rem;
	padding: 0.75rem;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
	flex-shrink: 0;
	border-radius: 0.6rem;
	background-color: ${props => (!props.$check ? '#fff' : '#5f5cec')};
	color: ${props => (!props.$check ? '#000' : '#fff')};
	font-family: Apple SD Gothic Neo;
	font-size: 1.7rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.35rem; /* 75% */
	letter-spacing: 0.015rem;
	cursor: pointer;
	border: ${props => (!props.$check ? '0.75px solid #5f5cec' : '')};
`;

const S = { Status };

export default S;
