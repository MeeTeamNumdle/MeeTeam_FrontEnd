import styled from 'styled-components';

const ManageMeeTeamPage = styled.div`
	.container-status {
		display: flex;
		gap: 2.1rem;
		margin-top: 3.83rem;
	}

	.container-contents {
		display: grid;
		margin-top: 1.65rem;
		grid-template-columns: repeat(3, 1fr);
		row-gap: 1.5rem;
		column-gap: 1.5rem;

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

const S = { ManageMeeTeamPage };

export default S;
