import styled from 'styled-components';

interface InputStyle {
	default?: string;
	focus?: string;
	arrow?: string;
	disabled?: boolean;
}

const InputLabel = styled.label<{ $width?: string }>`
	min-width: 0;
	display: flex;
	flex-direction: column;
	${props => (props.$width ? `width: ${props.$width}` : `flex: 1;`)};

	color: var(--Text-textColor2, #373f41);

	/* Body/body1/medium */
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.9rem; /* 118.75% */
	letter-spacing: 0.0032rem;

	h6 {
		margin-bottom: 0.8rem;

		/* Body/body2/semibold */
		font-size: 1.4rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.7rem; /* 121.429% */
		letter-spacing: 0.0028rem;
	}

	small {
		margin-top: 0.4rem;
		margin-left: auto;
		color: var(--State-unactive, #8e8e8e);
	}
`;

const Input = styled.input<InputStyle>`
	all: unset;
	display: flex;
	padding: 0 1.6rem;
	${props =>
		props.arrow && (props.arrow === 'left' ? 'padding-left: 5rem;' : 'padding-right: 5rem;')};
	height: 4.8rem;

	border-radius: 1rem;
	border: 0.1rem solid
		var(--Form-border-default, ${props => (props.disabled ? '#8E8E8E' : '#e3e3e3')});
	background: ${props =>
		props.disabled ? 'var(--Form-fill-disabled, #E3E3E3)' : 'var(--Form-fill-others, #fff)'};
	${props => props.default && `background-image: url(${props.default}); `}
	background-repeat: no-repeat; // 배경 아이콘 반복 X
	background-position: ${props =>
		props.arrow === 'left' ? 'center left 1.6rem' : 'center right 1.6rem'};
	color: ${props =>
		props.disabled
			? 'var(--Form-txtIcon-disabled, #8E8E8E)'
			: 'var(--Form-txtIcon-focus, #373f41)'};
	cursor: text;

	&:focus {
		${props => props.focus && `background-image: url(${props.focus}); `}
	}

	${props =>
		!props.disabled &&
		`&:hover,
		&:focus {
			border-color: var(--Form-border-focus, #5877fc);
		}`}
`;

const S = { InputLabel, Input };

export default S;