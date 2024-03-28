import styled from 'styled-components';

const CommentInput = styled.div`
	width: 100%;
	padding: 2.4rem 4.8rem;
	box-sizing: border-box;
	margin: 0 auto;
	border-radius: 0.75rem;
	border: 0.075rem solid var(--box_stroke, #e3e3e3);
	background: var(--Grayscale-200, #f6f6f6);

	.wrapper {
		display: flex;
		gap: 2rem;
		flex-direction: column;

		.container-user__icon {
			width: 3.15rem;
			height: 3.15rem;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			gap: 0.6rem;

			span {
				color: #373f41;
				font-size: 1.2rem;
				font-weight: 600;
			}
		}

		.container-user__input {
			display: flex;
			gap: 1rem;
			width: 100%;

			input {
				width: 100%;
				height: 4rem;
				flex-shrink: 0;
				border-radius: 0.75rem;
				border: 0.075rem solid #e3e3e3;
				background: #fff;
				outline: none;
				padding-left: 1.3rem;
				box-sizing: border-box;
			}
		}
		.container-btn {
			display: flex;
			justify-content: flex-end;
			.submit-btn {
				display: flex;
				width: 6.5rem;
				height: 3.6rem;
				padding: 1.2rem 2rem;
				justify-content: center;
				align-items: center;
				gap: 0.75rem;
				border-radius: 0.6rem;
				background: #5877fc;
				color: #fff;
			}
		}
	}
`;

const S = { CommentInput };

export default S;
