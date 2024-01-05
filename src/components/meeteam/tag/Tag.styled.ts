import styled from 'styled-components';

interface ITag {
	$recruit?: boolean;
	$proceed?: boolean;
}

const Tag = styled.div<ITag>`
	display: flex;
	width: 5.55rem;
	height: 2.4rem;
	padding: 0.75rem;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
	border-radius: 0.6rem;
	background: ${props =>
		props.$recruit
			? 'linear-gradient(270deg, rgba(95, 92, 236, 0.76) -6.3%, #d85cec 101.52%)'
			: props.$proceed
			? 'linear-gradient(90deg, #4E99EF -6.72%, #723DFF 107.8%)'
			: '#eeecff'};
	color: ${props => (props.$recruit ? '#fff' : props.$proceed ? '#fff' : '#373f41;')};
	font-family: Apple SD Gothic Neo;
	font-size: 1.1rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.35rem; /* 112.5% */
	letter-spacing: 0.015rem;
`;

const S = { Tag };

export default S;
