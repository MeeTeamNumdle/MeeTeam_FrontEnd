import styled from 'styled-components';

const MeeTeamCreatePage = styled.div`
	width: 80%;
	margin: 0 auto;

	.procedure {
		height: 80px;
		border-bottom: 3px solid #ababab;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 0 5rem 0 10rem;
		box-sizing: border-box;

		.procedure__subtitle {
			color: var(--light-black, #373f41);
			font-family: Pretendard;
			font-size: 1.3rem;
			font-style: normal;
			font-weight: 600;
			line-height: 3.5rem;
			letter-spacing: 0.0125rem;
		}

		.procedure__intro {
			width: 25rem;
			height: 2.25rem;
			display: flex;
			justify-content: flex-start;
			align-items: flex-end;
			line-height: 3.5rem;
			letter-spacing: 0.0125rem;

			p {
				font-family: Inter;
				font-size: 1.1rem;
				color: var(--light-black, #576574bb);
				font-weight: 600;
				font-style: normal;
			}
		}
	}

	.wrapper {
		height: 200vh;
		background-color: #dcdde1;
		margin-top: 50px;
		border-radius: 15px;

		.container {
			width: 80%;
			margin: 0 auto;
			padding-top: 50px;
		}
		.container__teamname {
			height: 100px;

			input {
				width: 20rem;
				height: 2.5rem;
				border-radius: 8px;
				border: none;
				outline: none;
				padding-left: 7px;
				box-sizing: border-box;
			}
		}

		.container__info {
			margin-top: 70px;

			.info-wrapper {
				padding: 20px;
			}

			.container__info-select {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				gap: 15rem;
				margin-top: 15px;
			}
		}
		.container__tag {
			margin-top: 70px;
		}
		.container__intro {
			margin-top: 70px;

			div:nth-child(2) {
				padding: 20px;
				.editor {
					background-color: #fff;
					border-radius: 10px;
				}
			}
		}
		.container__member {
			margin-top: 70px;
		}
	}
`;

const S = { MeeTeamCreatePage };

export default S;
