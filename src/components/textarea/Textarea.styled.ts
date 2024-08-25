import styled from 'styled-components';

const TextareaLabel = styled.label<{ $width?: string }>`
	min-width: 0;
	display: flex;
	flex-direction: column;
	${props => (props.$width ? `width: ${props.$width}` : `flex: 1;`)};
	color: var(--Text-textColor2, #373f41);
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.9rem;
	letter-spacing: 0.0032rem;

	h6 {
		margin-bottom: 0.8rem;
		font-size: 1.4rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;
	}
`;

const TextareaContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	span {
		margin-top: 0.4rem;
		margin-left: auto;
		color: var(--State-unactive, #8e8e8e);
	}

	small {
		position: absolute;
		top: 5.4rem;
		left: 1rem;
		white-space: nowrap;
		color: var(--ButtonColors-Caution-outline-defaultLine, #f85858);
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.2rem;
		letter-spacing: 0.002rem;
	}
`;

const Textarea = styled.textarea`
	all: unset;
	display: flex;
	resize: none;
	padding: 1.6rem 2rem;
	height: 16rem;
	border-radius: 1rem;
	border: 0.1rem solid var(--Form-border-default, #e3e3e3);
	background: var(--Form-fill-others, #fff);
	color: var(--Form-txtIcon-focus, #373f41);
	cursor: text;

	&:hover,
	&:focus {
		border-color: var(--Form-border-focus, #5877fc);
	}
`;

const S = { TextareaLabel, TextareaContainer, Textarea };

export default S;
