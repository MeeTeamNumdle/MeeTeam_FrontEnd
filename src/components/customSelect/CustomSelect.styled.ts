import styled from 'styled-components';

interface ISelectOptionsProps {
	show: boolean;
}

const CustomSelect = styled.div`
	position: relative;
	width: 15rem;
	padding: 8px;
	border-radius: 8px;
	background-color: #ffffff;
	align-self: center;
	margin-top: 5px;
	cursor: pointer;
	&::before {
		content: '⌵';
		position: absolute;
		top: 1px;
		right: 8px;
		color: #49c181;
		font-size: 20px;
	}
`;

const Label = styled.label`
	font-size: 14px;
	margin-left: 4px;
	text-align: center;
`;

const SelectOptions = styled.ul<ISelectOptionsProps>`
	position: absolute;
	list-style: none;
	top: 36px;
	left: 0;
	width: 100%;
	overflow: hidden;
	height: 90px;
	max-height: ${props => (props.show ? 'none' : '0')};
	padding: 0;
	border-radius: 8px;
	background-color: #fff;
	color: #000;
	z-index: 100;
`;

const Option = styled.li`
	font-size: 14px;
	padding: 6px 8px;
	transition: background-color 0.1s ease-in;
	&:hover {
		background-color: #0984e3;
		color: #fff;
	}
`;

const S = { CustomSelect, Label, SelectOptions, Option };

export default S;
