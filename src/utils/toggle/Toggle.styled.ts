import styled from 'styled-components';

const ToggleLabel = styled.label`
	position: relative;
	display: inline-block;
	width: 47.7px;
	height: 23.33px;
`;

const ToggleSpan = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: 0.4s;
	transition: 0.4s;
	border-radius: 34px;

	&:before {
		position: absolute;
		content: '';
		height: 15px;
		width: 15px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}
`;

const ToggleCheckBox = styled.input`
	opacity: 0;
	width: 0;
	height: 0;

	&:checked + ${ToggleSpan} {
		background-color: #20c72b;
	}

	&:focus + ${ToggleSpan} {
		box-shadow: 0 0 1px #c7cdd6;
	}

	&:checked + ${ToggleSpan}:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
`;

const S = { ToggleLabel, ToggleSpan, ToggleCheckBox };

export default S;
