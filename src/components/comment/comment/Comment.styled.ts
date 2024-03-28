import styled from 'styled-components';

const Comment = styled.li`
	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		width: 100%;

		.input-edit {
			width: 86%;
			border: none;
			border-bottom: 1px solid #373f41;
			background-color: transparent;
			outline: none;
			padding-bottom: 0.5rem;
			font-size: 1.5rem;
		}

		.comment-icon {
			display: flex;
			align-items: center;
			gap: 0.6rem;

			span {
				color: #373f41;
				font-size: 1.2rem;
				font-weight: 600;
			}
		}

		.comment-info {
			display: flex;
			flex-direction: column;
			gap: 0.3rem;

			span {
				color: #373f41;
				font-size: 1.2rem;
			}
		}
	}

	hr {
		height: 0.075rem;
		margin: 1.6rem 0;
		width: 100%;
		opacity: 0.96;
		background: #e3e3e3;
	}

	.wrapper-replies {
		padding-left: 3rem;
		box-sizing: border-box;

		.container-reply__lists {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}
	}
`;

const S = { Comment };

export default S;
