import styled from 'styled-components';

const ApplyInput = styled.div`
	.container-apply__form {
		display: flex;
		flex-direction: column;
		gap: 1.8rem;

		.container-apply__form-title {
			color: #000;

			font-size: 1.8rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.8rem; /* 100% */
			letter-spacing: -0.036rem;
		}

		.container-apply__form-my {
			display: flex;
			align-items: center;
			gap: 0.85rem;

			span {
				color: var(--Light-Black, var(--text-color-2, #373f41));

				font-size: 1.5rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.35rem; /* 90% */
				letter-spacing: 0.015rem;
			}
		}

		.container-apply__form-input {
			display: flex;
			position: relative;
			flex-direction: column;
			align-items: center;
			margin-top: 1.75rem;
			gap: 1.65rem;

			.container-apply__roles {
				display: flex;
				width: 100%;
				height: 4rem;
				padding: 0.45rem 1.35rem;
				align-items: center;
				border-radius: 0.75rem;
				border: 0.05rem solid #614bf7;
				background: #fff;
				outline: none;
				color: var(--Light-Black, var(--text-color-2, #373f41));

				font-size: 1.3rem;
				font-style: normal;
				font-weight: 400;
				line-height: 140%; /* 2.1rem */
				letter-spacing: 0.015rem;
				cursor: pointer;
			}
			.dropdown {
				position: absolute;
				top: 5rem;
				width: 100%;
				z-index: 101;
				background-color: #ffeaa7;
				padding: 2rem 1.2rem;
				border-radius: 1.2rem;

				ul {
					display: flex;
					flex-direction: column;
					gap: 2rem;

					li {
						font-size: 1.3rem;
						cursor: pointer;

						&:hover {
							transition: 0.2s;
							color: #9a77ee;
						}
					}
				}
			}

			.container-apply__words {
				display: flex;
				width: 90%;
				height: 3rem;
				padding: 0.45rem 1.35rem;
				align-items: center;
				border-radius: 0.75rem;
				border: 0.05rem solid #614bf7;
				background: #fff;
				outline: none;
			}
		}

		.container-apply__form-warn {
			display: flex;
			flex-direction: column;
			padding: 1.35rem 1.45rem;
			background-color: #fff;
			width: 100%;
			border-radius: 0.6rem;

			span:nth-child(1) {
				color: #000;

				font-size: 1.5rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.8rem; /* 120% */
				letter-spacing: -0.03rem;
			}
			span:nth-child(2) {
				margin-top: 0.3rem;
				color: #686868;

				font-size: 1.05rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.8rem; /* 171.429% */
				letter-spacing: -0.021rem;
			}

			.container-checkbox {
				display: flex;
				align-items: center;
				margin-top: 0.82rem;

				label {
					color: #000;

					font-size: 1.2rem;
					font-style: normal;
					font-weight: 400;
					line-height: 1.8rem; /* 150% */
					letter-spacing: -0.024rem;
					margin-top: 0.2rem;
					margin-left: 0.4rem;
				}
			}
		}

		.container-apply__form-button {
			display: flex;
			height: 4.275rem;
			padding: 0.75rem;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			flex-shrink: 0;
			border-radius: 7.5rem;
		}

		.disable {
			background-color: #dfe6e9;
			color: #000;
			cursor: not-allowed;
		}

		.able {
			background: linear-gradient(270deg, rgba(95, 92, 236, 0.76) -6.3%, #d85cec 101.52%);
			color: #fff;
		}
	}
`;

const S = { ApplyInput };

export default S;
