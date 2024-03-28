import styled from 'styled-components';

const ApplyInformation = styled.div`
	.container-apply__member {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 7rem;

		.type {
			color: #000;

			font-size: 1.8rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.8rem; /* 100% */
			letter-spacing: -0.036rem;
		}

		.leader-info {
			display: flex;
			gap: 0.62rem;
			margin-top: 2rem;

			.leader-info__icon {
				width: 3.3075rem;
				height: 3.3075rem;
				flex-shrink: 0;
				border-radius: 50%;

				img {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}

			.leader-info__user {
				display: flex;
				flex-direction: column;
				justify-content: center;
				gap: 0.3rem;

				span:nth-child(1) {
					color: var(--Light-Black, var(--text-color-2, #373f41));

					font-size: 1.5rem;
					font-style: normal;
					font-weight: 400;
					line-height: 1.35rem; /* 90% */
					letter-spacing: 0.015rem;
				}

				span:nth-child(2) {
					display: flex;
					gap: 1rem;

					.user-info {
						color: #858585;

						font-size: 1.2rem;
						font-style: normal;
						font-weight: 400;
						line-height: 1.35rem;
						letter-spacing: 0.015rem;
					}
				}
			}
		}
	}

	hr {
		margin-top: 2.8rem;
	}

	.container-apply__deadline {
		margin-top: 2.51rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;

		span:nth-child(1) {
			color: #000;

			font-size: 1.8rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.8rem; /* 100% */
			letter-spacing: -0.036rem;
		}
		span:nth-child(2) {
			color: var(--Light-Black, var(--text-color-2, #373f41));

			font-size: 1.5rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.35rem; /* 90% */
			letter-spacing: 0.015rem;
		}
	}

	.container-apply__buttons {
		margin-top: 3.1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: center;

		button {
			border: none;
			outline: none;
			display: flex;
			width: 25.65rem;
			height: 4.275rem;
			padding: 0.75rem;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			flex-shrink: 0;
			border-radius: 7.5rem;
			cursor: pointer;

			span {
				margin-top: 0.1rem;
			}
		}

		button:nth-child(1) {
			background-color: #fff;
			border: 0.75px solid rgba(95, 92, 236, 0.76);
		}

		button:nth-child(2) {
			color: #fff;
			background: linear-gradient(270deg, rgba(95, 92, 236, 0.76) -6.3%, #d85cec 101.52%);
		}
	}
`;

const S = { ApplyInformation };

export default S;
