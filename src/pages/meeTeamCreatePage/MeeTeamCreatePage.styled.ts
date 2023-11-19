import styled from 'styled-components';

const MeeTeamCreatePage = styled.div`
	width: 80%;
	margin: 0 auto;
	margin-bottom: 30px;

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
		background-color: #dcdde1;
		margin-top: 50px;
		border-radius: 15px;
		margin-bottom: 50px;
		padding-bottom: 50px;

		.container {
			width: 80%;
			margin: 0 auto;
			padding-top: 50px;
		}
		.container__teamname {
			height: 100px;

			.container__teamname-input {
				padding: 10px 20px;

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
		}

		.container__info {
			margin-top: 70px;

			.info-wrapper {
				padding: 10px 20px;
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
				padding: 10px 20px;
				.editor {
					background-color: #fff;
					border-radius: 10px;
				}
			}
		}

		.container__member {
			margin-top: 70px;
			width: 100%;

			.controll {
				/* display: flex; */
				gap: 0.5rem;
				margin-bottom: 30px;

				button {
					border: none;
					width: 5rem;
					height: 1.5rem;
					border-radius: 5px;
					cursor: pointer;
				}

				button:nth-child(2) {
					margin-left: 20px;
					background-color: #00b894;
					color: #fff;
				}

				button:nth-child(3) {
					margin-left: 5px;
					background-color: #e17055;
					color: #fff;
				}
			}

			.container__member-add {
				display: flex;
				justify-content: center;
				align-items: center;

				.addition {
					width: 2.7rem;
					height: 2.7rem;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 3rem;
					border-radius: 50%;
					color: #000;
					cursor: pointer;
				}
			}
		}

		.container__controller {
			margin-top: 70px;
			display: flex;
			justify-content: center;
			gap: 1rem;

			button {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 12rem;
				height: 3.5rem;
				padding: 0.625rem;
				gap: 0.625rem;
				border-radius: 0.5rem;
				border: 0.5px solid #ababab;
				cursor: pointer;
				font-size: 1rem;
			}

			button:nth-child(1) {
				background: #a9a9a9;
			}

			button:nth-child(2) {
				background: #00b894;
				color: #fff;
			}
		}
	}
`;

const S = { MeeTeamCreatePage };

export default S;
