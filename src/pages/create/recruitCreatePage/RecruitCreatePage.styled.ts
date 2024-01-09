import styled from 'styled-components';

const RecruitCreatePage = styled.div`
	width: clamp(45%, 108rem, 75%);
	margin: 0 auto;
	margin-bottom: 30px;

	.procedure {
		height: 80px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		box-sizing: border-box;
		margin-top: 2.81rem;

		.procedure__subtitle {
			color: #373f41;
			font-family: Apple SD Gothic Neo;
			font-size: 2.4rem;
			font-style: normal;
			font-weight: 400;
			line-height: 4.2rem; /* 175% */
			letter-spacing: 0.015rem;
		}

		.procedure__intro {
			width: 30rem;
			height: 2.25rem;
			display: flex;
			justify-content: flex-start;
			align-items: flex-end;
			line-height: 3.5rem;
			letter-spacing: 0.0125rem;

			p {
				color: #8e8e8e;
				font-family: Apple SD Gothic Neo;
				font-size: 1.65rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.65rem; /* 100% */
				letter-spacing: -0.033rem;
			}
		}
	}

	.wrapper {
		width: 100%;
		margin-top: 2rem;
		margin-bottom: 50px;
		padding-bottom: 50px;
		border-radius: 0.5rem;
		border: 2px solid #bcd7ff;
		background: #f7faff;

		.container {
			width: 80%;
			margin: 0 auto;
			padding-top: 50px;
			display: flex;
			flex-direction: column;
			gap: 5rem;
		}
		.container__teamname {
			height: 100px;

			.container__teamname-input {
				padding: 10px 0px;

				input {
					width: 40.125rem;
					height: 4.875rem;
					flex-shrink: 0;
					border-radius: 0.75rem;
					border: 0.75px solid #e3e3e3;
					background: #fff;
					outline: none;
					padding-left: 2.1rem;
					box-sizing: border-box;
				}
			}

			.teamname-length {
				width: 40rem;
				display: flex;
				justify-content: flex-end;
			}

			p {
				color: red;
				font-size: 1.2rem;
			}
		}

		.container__info {
			.info-wrapper {
				display: flex;
				flex-direction: column;
				gap: 2rem;
				margin: 0 auto;
			}

			.container__info-select {
				width: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				gap: 30.82rem;
				margin-top: 15px;

				p {
					position: absolute;
					color: red;
					font-size: 1.2rem;
					padding-top: 1rem;
					box-sizing: border-box;
				}
			}
		}

		.container__tag {
			margin-top: 70px;
		}

		.container__intro {
			margin-top: 7rem;

			div:nth-child(2) {
				/* padding: 10px 20px; */
				.editor {
					background-color: #fff;
					border-radius: 10px;
				}
			}

			.ql-container.ql-snow {
				border: 0.75px solid #e3e3e3;
				border-bottom-right-radius: 0.75rem;
				border-bottom-left-radius: 0.75rem;
				height: 30.825rem;
			}

			.ql-toolbar.ql-snow {
				border: 0.75px solid #e3e3e3;
				border-top-right-radius: 0.75rem;
				border-top-left-radius: 0.75rem;
				box-sizing: border-box;
				font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
				padding: 8px;
			}
		}

		.container__img {
			margin-top: 7rem;

			.container__img-input {
				padding: 10px 0px;

				input {
					display: none;
				}

				label {
					display: block;
					width: 100%;
					height: 4.875rem;
					flex-shrink: 0;
					border-radius: 0.75rem;
					border: 0.75px solid #e3e3e3;
					background: #fff;
					outline: none;
					padding-left: 2.1rem;
					box-sizing: border-box;
					color: #a7a7a7;
					font-size: 1.3rem;
					font-style: normal;
					font-weight: 400;
					line-height: 1.8rem; /* 90% */
					letter-spacing: 0.02rem;
					display: flex;
					align-items: center;
				}

				.haveFile {
					color: #000;
				}
			}
		}

		.container__member {
			margin-top: 70px;
			width: 100%;

			.container__member-area {
				min-height: 24rem;
				width: 100%;
				background-color: #fff;
				border: 1px solid #dcdcdc;
				border-radius: 1rem;
			}

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
					background-color: #00b894;
					color: #fff;
				}

				button:nth-child(3) {
					background-color: #e17055;
					color: #fff;
				}
			}

			.container__member-add {
				display: flex;
				justify-content: center;
				align-items: center;

				.addition {
					width: 7rem;
					height: 7rem;
					flex-shrink: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 50%;
					color: #000;
					cursor: pointer;
					opacity: 0.8;
					filter: drop-shadow(0px 3px 18.75px rgba(0, 0, 0, 0.11));

					.addition-container {
					}
				}
			}
		}

		.container__controller {
			margin-top: 70px;
			display: flex;
			justify-content: center;
			gap: 2rem;

			button {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 15rem;
				height: 5rem;
				padding: 1rem 1rem;
				border: none;
				gap: 1rem;
				border-radius: 0.8rem;
				cursor: pointer;
				color: #373f41;
				font-size: 1.5rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.8rem; /* 75% */
				letter-spacing: 0.02rem;
			}

			button:nth-child(1) {
				background: #e0e6ff;
			}

			button:nth-child(2) {
				background: #5877fc;
				color: #fff;
			}
		}
	}
`;

const S = { RecruitCreatePage };

export default S;
