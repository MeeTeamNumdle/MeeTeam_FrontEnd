import styled from 'styled-components';

const Modal = styled.section`
	width: 52rem;
	height: 68rem;
	border-radius: 1rem;
	border: 1px solid #e3e3e3;
	background: #f8fafb;
	padding: 4rem;
	box-sizing: border-box;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 501;

	h1 {
		color: #000;
		font-size: 2.4rem;
		font-style: normal;
		font-weight: 700;
		line-height: 2.9rem;
		letter-spacing: 0.0048rem;
	}

	h4 {
		color: #151515;
		font-size: 1.8rem;
		font-weight: 600;
		line-height: 2.1rem;
		letter-spacing: 0.0036rem;
	}

	.description {
		display: flex;
		flex-direction: column;
		margin-top: 1.6rem;

		.description-subtitle {
			color: #151515;
			font-size: 1.8rem;
			font-weight: 600;
			line-height: 2.1rem;
			letter-spacing: 0.0036rem;
		}

		.description-subinfo {
			color: #373f41;
			font-size: 1.4rem;
			font-weight: 500;
			line-height: 1.7rem;
			letter-spacing: 0.0028rem;
			margin-top: 0.7rem;
		}

		.description-confirm {
			color: #373f41;
			font-size: 1.4rem;
			line-height: 1.7rem;
			letter-spacing: 0.0028rem;
			margin-top: 0.7rem;
		}

		.agreement {
			display: flex;
			align-items: center;
			margin-top: 1.6rem;
			padding: 0;
			gap: 0.6rem;

			input {
				margin: 0;
				padding: 0;
			}

			span {
				color: #373f41;
				font-size: 1.4rem;
				line-height: 1.7rem;
				letter-spacing: 0.0028rem;
			}
		}
	}

	.container-user__info {
		width: 44rem;
		border-radius: 0.8rem;
		border: 1px solid #e3e3e3;
		background-color: #fff;
		margin-top: 2.7rem;
		padding: 1.8rem 2rem;
		box-sizing: border-box;

		.confirm-title {
			font-size: 1.8rem;
		}

		.user-info {
			display: flex;
			justify-content: flex-start;
			margin-top: 1.6rem;
			height: 8.4rem;
			gap: 6.26rem;

			span {
				color: #8e8e8e;
				font-size: 1.4rem;
				line-height: 1.7rem;
				letter-spacing: 0.0028rem;
			}

			.value {
				color: #373f41;
			}

			.user-info__section {
				display: flex;
				gap: 3.14rem;

				section {
					display: flex;
					flex-direction: column;
					gap: 0.6rem;
				}
			}
		}

		.value {
			color: #373f41;
		}

		.role-info {
			margin-top: 1.8rem;
			color: #373f41;
			height: 5.3rem;

			p {
				color: #373f41;
				font-size: 1.4rem;
				margin-top: 1.5rem;
				line-height: 1.7rem;
				letter-spacing: 0.0028rem;
			}
		}
	}

	.container-role {
		margin-top: 1.2rem;

		.container-select__box {
			position: relative;
			display: flex;
			width: 44rem;
			height: 4.8rem;
			padding: 1.2rem 1.6rem;
			flex-direction: column;
			justify-content: center;
			box-sizing: border-box;
			border-radius: 1rem;
			border: 1px solid #e3e3e3;
			background: #fff;
			color: #8e8e8e;
			font-size: 1.6rem;
			font-weight: 500;
			line-height: 1.35rem;
			letter-spacing: 0.015rem;

			&:hover {
				border-color: #5877fc;
				transition: 0.2s ease-in-out;
			}

			ul {
				position: absolute;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				top: 4.7rem;
				left: 0;
				display: flex;
				width: 100%;
				padding: 1.2rem 1.6rem;
				flex-direction: column;
				align-items: flex-start;
				gap: 1rem;
				border-radius: 1rem;
				border: 1px solid #e3e3e3;
				background: #fff;
				z-index: 601;
				box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
			}

			img {
				position: absolute;
				right: 1rem;
				top: 1.2rem;
			}
		}
	}

	.container-message {
		margin-top: 1.2rem;

		textarea {
			display: flex;
			width: 44rem;
			height: 10rem;
			padding: 1.4rem 1.6rem;
			align-items: flex-start;
			gap: 1rem;
			resize: none;
			box-sizing: border-box;
			border-radius: 1rem;
			border: 1px solid #e3e3e3;
			background: #fff;
			color: #8e8e8e;
			font-size: 1.6rem;
			font-weight: 400;
			line-height: 1.35rem;
			letter-spacing: 0.015rem;

			&:hover {
				border-color: #5877fc;
				transition: 0.2s ease-in-out;
			}

			&:focus {
				outline: none;
				border: 1px solid var(--main-color, #5877fc);
			}
		}
	}

	.container-buttons {
		margin-top: 6rem;
		display: flex;
		justify-content: center;
		gap: 1.35rem;

		button {
			padding: 1.2rem 3.2rem;
			border-radius: 0.6rem;
			color: #373f41;
			font-size: 1.6rem;
			line-height: 1.9rem;
			letter-spacing: 0.0032rem;
			box-sizing: border-box;
		}

		.cancel {
			height: 4.8rem;
			border-radius: 0.6rem;
			border: 1px solid #e3e3e3;
			background: #fff;
		}

		.confirm {
			background-color: #5877fc;
			font-weight: 400;
			color: #fff;
		}
	}

	.confirm-btn {
		margin-top: 14.7rem;
	}

	hr {
		margin-top: 2.4rem;
		background: #e3e3e3;
		height: 0.1rem;
		border: 0;
	}
`;

const FinalModal = styled.section`
	width: 52rem;
	border-radius: 0.75rem;
	border: 0.075rem solid #dcdcdc;
	background-color: #f8fafb;
	padding: 4rem;
	box-sizing: border-box;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 501;

	h1 {
		color: #000;
		font-size: 2.4rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.8rem;
		letter-spacing: -0.036rem;
	}

	.description {
		display: flex;
		flex-direction: column;
		margin-top: 1.6rem;

		span:nth-child(1) {
			color: #151515;
			font-size: 1.8rem;
			font-weight: 600;
			line-height: 1.8rem;
			letter-spacing: 0.0027rem;
		}
		span:nth-child(2) {
			color: #373f41;
			font-size: 1.4rem;
			font-weight: 400;
			line-height: 1.8rem;
			letter-spacing: 0.0021rem;
			margin-top: 0.7rem;
		}

		.agreement {
			display: flex;
			align-items: center;
			margin-top: 0.9rem;
			padding: 0;
			gap: 0.6rem;

			input {
				margin-top: 0.5rem;
				padding: 0;
			}
		}
	}

	.container-button {
		display: flex;
		justify-content: flex-end;
		margin-top: 6.2rem;

		button {
			display: flex;
			height: 4.8rem;
			padding: 1.2rem 3.2rem;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			flex-shrink: 0;
			border-radius: 0.6rem;
			background-color: #5877fc;
			color: #fff;
		}
	}
`;

const S = { Modal, FinalModal };

export default S;
