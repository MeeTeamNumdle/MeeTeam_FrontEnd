import styled from 'styled-components';

const ToggleLabel = styled.label`
	position: relative;
	display: inline-block;
	width: 3.229vw;
	height: 1.562vw;
`;

const ToggleSpan = styled.span<{ checked?: boolean }>`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${props => (props.checked ? '#5877FC' : '#FFFFFF')};
	-webkit-transition: 0.4s;
	transition: 0.4s;
	border-radius: 3.229vw;
	border: solid ${props => (props.checked ? '#5877FC' : '#D9D9D9')};

	&:before {
		position: absolute;
		content: '';
		height: 1vw;
		width: 1vw;
		left: 0.181vw;
		bottom: 0.181vw;
		background-color: ${props => (props.checked ? '#FFFFFF' : '#5877FC')};
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}
`;

const ToggleCheckBox = styled.input`
	&:checked + ${ToggleSpan} {
		background-color: #5877fc;
	}

	&:focus + ${ToggleSpan} {
		box-shadow: #d9d9d9;
	}

	&:checked + ${ToggleSpan}:before {
		-webkit-transform: translateX(3vw);
		-ms-transform: translateX(3vw);
		transform: translateX(1.6vw);
	}
`;

const S = { ToggleLabel, ToggleSpan, ToggleCheckBox };

export default S;
