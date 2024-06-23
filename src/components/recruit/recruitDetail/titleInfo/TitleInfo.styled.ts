import styled from 'styled-components';

const TitleInfo = styled.article`
	.container-header {
		display: flex;
		align-items: center;
		gap: 0.9rem;
		position: relative;

		.container-header__profile {
			display: flex;
			align-items: center;

			.nickname {
				margin-left: 0.6rem;
				color: #373f41;
				font-size: 1.6rem;
				font-weight: 600;
				line-height: 1.9rem;
				letter-spacing: 0.0032rem;
			}
		}

		.profile {
			display: flex;
			align-items: center;
		}

		.bubble {
			color: #373f41;
			font-size: 1.4rem;
			font-weight: 600;
			line-height: 1.7rem;
			letter-spacing: 0.0028rem;
			border-radius: 2rem;
			border: 0.1rem solid #e0e6ff;
			background: #fff;
			padding: 0.8rem 1rem;
		}

		.first {
			margin-left: 0.7rem;
		}

		.date {
			margin-left: 0.8rem;
			color: #8e8e8e;
			font-size: 1.4rem;
			font-weight: 500;
			line-height: 1.7rem;
			letter-spacing: 0.0028rem;
		}

		.container-bookmark {
			position: absolute;
			right: 0rem;
			display: flex;
			align-items: center;
			gap: 1rem;

			.icon-bookmark {
				position: absolute;
				right: 2rem;
				cursor: pointer;
			}

			.count-bookmark {
				color: #373f41;
				font-size: 1.6rem;
				letter-spacing: 0.0032rem;
				margin-top: 0.3rem;
			}
		}
	}

	.container-info {
		display: flex;
		align-items: center;
		gap: 0.9rem;
	}

	h1 {
		color: #151515;
		font-size: 2.8rem;
		font-weight: 700;
		line-height: 3.6rem;
		letter-spacing: 0.0056rem;
		margin-top: 1.13rem;
	}

	@media (max-width: 768px) {
		/* .container-header {
			flex-direction: column;
		} */

		h1 {
			font-size: 2.2rem;
			line-height: 2.8rem;
			margin-top: 0.7rem;
		}
	}

	@media (max-width: 480px) {
		.container-header {
			.container-header__profile {
				flex-direction: column;
				align-items: flex-start;

				span {
					margin-left: 0;
					margin-top: 0.4rem;
				}

				.container-info {
					margin-top: 1rem;
				}
			}

			.bubble {
				font-size: 1.2rem;
				padding: 0.6rem 0.8rem;
			}

			.date {
				font-size: 1.2rem;
				margin-left: 0.6rem;
			}

			.count-bookmark {
				font-size: 1.4rem;
			}
		}

		h1 {
			font-size: 2rem;
			line-height: 2.6rem;
			margin-top: 0.5rem;
		}
	}

	@media (max-width: 431px) {
		.container-header {
			align-items: flex-start;
			margin-bottom: 2rem;

			.container-header__profile {
				flex-direction: column;
				align-items: flex-start;

				span {
					margin-left: 0;
					margin-top: 0.4rem;
				}
			}

			.bubble {
				font-size: 1.2rem;
				padding: 0.6rem 0.8rem;
			}

			.date {
				font-size: 1.2rem;
				margin-left: 0.6rem;
			}

			.container-bookmark {
				flex-direction: row;
				align-items: flex-end;
				margin-top: 0.5rem;
			}

			.icon-bookmark {
				width: 1.8rem;
			}

			.count-bookmark {
				font-size: 1.1rem;
			}
		}

		h1 {
			font-size: 2rem;
			line-height: 2.6rem;
			margin-top: 0.5rem;
		}
	}
`;

const S = { TitleInfo };

export default S;
