import styled from 'styled-components';

const FieldPopup = styled.article<{ $isFieldClick: boolean }>`
	display: flex;
	align-items: center;
	margin-top: 6rem;
	gap: 1.6rem;
	position: relative;

	.sep {
		font-size: 3rem;
		color: #e3e3e3;
	}

	.container-field {
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	.dropdown-field {
		position: absolute;
		top: 3.7rem;
		left: 13rem;
		width: 46rem;
		height: 31.2rem;
		padding: 1.8rem 2rem;
		box-sizing: border-box;
		z-index: 500;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1.2rem;
		border-radius: 1rem;
		border: 1px solid #e3e3e3;
		background: #fff;
		box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

		.container-keys {
			display: flex;
			flex-wrap: wrap;
			width: 100%;

			.field-key {
				display: flex;
				width: 13.2rem;
				height: 4.8rem;
				padding: 1.2rem 3.2rem;
				box-sizing: border-box;
				justify-content: center;
				align-items: center;
				border-radius: 1rem;
				border: 1px solid ${props => (props.$isFieldClick ? '#5877fc' : '#e3e3e3')};
				background: #fff;
				color: ${props => (props.$isFieldClick ? '#373F41' : '#8e8e8e')};
				font-size: 1.6rem;
				letter-spacing: 0.0032rem;
				cursor: pointer;

				&:focus-within {
					border-color: #5877fc;
					color: #373f41;
				}

				&:hover {
					border-color: #5877fc;
					transition: 0.2s ease-in-out;
				}
			}
		}

		.container-btns {
			display: flex;
			align-items: center;
			gap: 1.6rem;
			justify-content: flex-end;

			.clear {
				display: flex;
				align-items: center;
				gap: 0.4rem;
				cursor: pointer;

				span {
					margin-top: 0.2rem;
					font-size: 1.4rem;
					letter-spacing: 0.0028rem;
					color: #8e8e8e;
				}
			}

			button {
				display: flex;
				height: 3.6rem;
				padding: 1.2rem 2rem;
				box-sizing: border-box;
				border-radius: 0.6rem;
				background: #5877fc;
				color: #fff;
				font-size: 1.4rem;
				line-height: 1.7rem;
				justify-content: center;
				align-items: center;
			}
		}
	}

	@media (max-width: 1200px) {
		.sep {
			font-size: 2rem;
		}
	}

	@media (max-width: 768px) {
		.sep {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 600px) {
		gap: 0.8rem;
	}

	@media (max-width: 431px) {
		gap: 0.4rem;

		.dropdown-field {
			width: 100%;
			height: 20rem;
			left: 0;
		}
	}
`;

const S = { FieldPopup };

export default S;
