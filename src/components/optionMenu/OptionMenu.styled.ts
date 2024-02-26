import styled from 'styled-components';

const OptionMenuLayout = styled.ul`
	position: absolute;
	left: -5.5rem;
	top: 2.85rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.75rem;
	padding: 0.75rem 0.53rem;
	width: 7.95rem;
	border-radius: 0.6rem;
	background: #fff;
	box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);
	cursor: pointer;
`;

const OptionMenuItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 6.9rem;
	height: 2.7rem;
	border-radius: 0.6rem;
	color: var(--text-color, #151515);
	font-size: 1.2rem;
	font-style: normal;
	font-weight: 400;
	&:hover {
		background: #e0e6ff;
	}
`;

const Option = styled.span`
	display: flex;
	height: 3.525rem;
	padding: 0.75rem 2rem;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
	border-radius: 7.5rem;
	background: var(--sub-color, #e0e6ff);
	color: var(--Light-Black, var(--text-color-2, #373f41));

	font-size: 1.5rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.35rem; /* 90% */
	letter-spacing: 0.015rem;
	cursor: pointer;
`;

const S = { OptionMenuLayout, OptionMenuItem, Option };

export default S;
