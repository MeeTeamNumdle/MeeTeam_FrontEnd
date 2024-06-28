import styled from 'styled-components';

const RecruitInfo = styled.article`
	margin-top: 4rem;
	border-radius: 1rem;
	border: 0.075rem solid #e3e3e3;
	background: #fff;
	display: flex;
	padding: 4.8rem 9.8rem;
	box-sizing: border-box;
	gap: 16rem;

	.container-info {
		display: flex;
		align-items: flex-end;
		gap: 4.2rem;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
		font-size: 1.6rem;

		.subtitles {
			display: flex;
			flex-direction: column;
			color: #8e8e8e;
			gap: 4rem;
		}

		.values {
			display: flex;
			flex-direction: column;
			color: #373f41;
			font-weight: 600;
			gap: 4rem;

			section {
				display: flex;
				align-items: center;
				gap: 2rem;

				.recruiting {
					color: #5877fc;
				}

				.closed {
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 1.5rem;
					border: #8e8e8e;
					background: #e3e3e3;
					color: #8e8e8e;
				}
			}
		}
	}

	@media (max-width: 450px) {
		padding: 4rem 2.4rem;
		flex-direction: column;
		gap: 3rem;

		.container-info {
			gap: 3rem;
			font-size: 1.4rem;

			.subtitles {
				gap: 3rem;
			}

			.values {
				gap: 3rem;
			}
		}
	}

	@media (max-width: 382px) {
		.container-info {
			gap: 1.5rem;
			font-size: 1.4rem;
		}
	}
`;

const S = { RecruitInfo };

export default S;
