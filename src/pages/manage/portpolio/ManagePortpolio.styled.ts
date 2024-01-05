import styled from 'styled-components';

const ManagePortpolioPage = styled.div`
	margin-top: 5.92rem;

	h1 {
		color: var(--Light-Black, var(--text-color-2, #373f41));
		font-family: Apple SD Gothic Neo;
		font-size: 2.1rem;
		font-style: normal;
		font-weight: 400;
		line-height: 4.2rem; /* 200% */
		letter-spacing: 0.015rem;
		margin-top: 3.22rem;
	}

	.container-contents {
		display: grid;
		margin-top: 1.65rem;
		grid-template-columns: repeat(3, 1fr);
		row-gap: 2rem;

		.content {
			width: 25.65rem;
			height: 13.5rem;
			flex-shrink: 0;
			border-radius: 0.75rem;
			background: rgba(0, 0, 0, 0.15);
			cursor: pointer;
		}
	}
`;

const S = { ManagePortpolioPage };

export default S;
