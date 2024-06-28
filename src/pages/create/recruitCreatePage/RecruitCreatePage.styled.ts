import styled from 'styled-components';

const RecruitCreatePage = styled.div`
	width: clamp(45%, 96rem, 75%);
	margin: 0 auto;
	margin-bottom: 17rem;
	position: relative;

	.blank {
		width: 100vw;
		height: 100vh;
		background: #fff;
	}

	h2 {
		color: #151515;
		font-size: 2.4rem;
		font-weight: 700;
		line-height: 2.9rem;
		letter-spacing: 0.0048rem;
	}
	h3 {
		color: #151515;
		font-size: 2rem;
		font-weight: 600;
		line-height: 2.4rem;
		letter-spacing: 0.004rem;
	}
	h4 {
		color: #373f41;
		font-size: 1.8rem;
		font-weight: 600;
		line-height: 2.1rem;
		letter-spacing: 0.0036rem;
	}

	.body2-medium {
		color: #151515;
		font-size: 1.4rem;
		line-height: 1.6rem;
		letter-spacing: 0.0028rem;
	}

	.txt-small {
		font-size: 1.4rem;
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;
	}

	.container-introduction {
		margin-top: 8rem;
		h4 {
			margin-top: 1.2rem;
		}
	}

	.under-intro {
		width: 100%;
		height: 0.075rem;
		background: #373f41;
		margin-top: 2rem;
		border: none;
	}

	.input-subtitle {
		color: #373f41;
		font-size: 1.4rem;
		font-weight: 600;
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;

		span {
			color: #f85858;
			font-size: 1.4rem;
			font-weight: 600;
			line-height: 1.7rem;
			letter-spacing: 0.0028rem;
		}
	}

	.under-info {
		width: 100%;
		height: 0.075rem;
		background: #e3e3e3;
		border: none;
		margin-top: 4rem;
	}

	.subtitle {
		width: 19.6rem;
	}

	.container-tags {
		display: flex;
		width: 100%;
		margin-top: 4rem;
		min-height: 20rem;

		.container-tags__inputs {
			width: 76.4rem;
			position: relative;
		}

		.valid-msg {
			color: #f85858;
			font-size: 1rem;
			line-height: 1.2rem;
			letter-spacing: 0.002rem;
		}

		.is-tag {
			position: absolute;
			top: 5.4rem;
			left: 1rem;
		}
	}

	.container-btns {
		display: flex;
		justify-content: flex-end;
		gap: 1.6rem;
		margin-top: 12rem;

		button {
			height: 4.8rem;
			padding: 1.2rem 3.2rem;
			font-size: 1.6rem;
			border-radius: 0.6rem;
		}

		.cancel-btn {
			border: 1px solid #e3e3e3;
			background: #fff;
		}

		.submit-btn {
			background: #5877fc;
			color: #fff;
		}
	}

	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 105;
		background-color: rgba(0, 0, 0, 0.15);
	}

	.validation-modal {
		position: fixed;
		border-radius: 1rem;
		border: 1px solid #e3e3e3;
		background: #f8fafb;
		display: inline-flex;
		height: 32.9188rem;
		padding: 2.8rem 4rem;
		flex-direction: column;
		align-items: center;
		gap: 2.8rem;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 505;

		.caution {
			color: #f85858;
		}

		.wrapper-list__unsatisfied {
			width: 100%;

			.subtitle {
				width: 9.877rem;
				height: 3.3297rem;
				flex-shrink: 0;
				border-top: 1px solid #e3e3e3;
				border-right: 1px solid #e3e3e3;
				border-bottom: 1px solid #e3e3e3;
				background: #f6f6f6;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.container-list {
				display: flex;
			}

			.list-unsatisfied {
				width: 41.0746rem;
				height: 3.3297rem;
				border-top: 1px solid #e3e3e3;
				border-bottom: 1px solid #e3e3e3;
				background: #fff;
				display: flex;
				align-items: center;

				.element {
					margin: 0.81rem 0 0.91rem 1.6rem;
				}
			}
		}

		.btn-okay {
			margin-top: 4rem;
			display: flex;
			height: 3.6rem;
			padding: 1.2rem 3.2rem;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			border-radius: 0.6rem;
			background: #5877fc;
			color: #f7faff;
		}
	}

	@media (max-width: 450px) {
		width: 90%;
		margin-bottom: 10rem;

		h2 {
			font-size: 2rem;
		}
		h3 {
			font-size: 1.6rem;
		}
		h4 {
			font-size: 1.4rem;
		}

		.container-tags {
			flex-direction: column;

			.subtitle {
				margin-bottom: 1.5rem;
				width: 100%;

				h4 {
					font-size: 2rem;
					margin-bottom: 1.5rem;
				}
			}

			.container-tags__inputs {
				width: 100%;
			}
		}

		.modal-background {
			.validation-modal {
				width: 80%;
				height: auto;

				.wrapper-list__unsatisfied {
					.container-list {
						.subtitle {
							height: auto;
						}
						.list-unsatisfied {
							width: 100%;
							height: auto;
							display: flex;
							flex-wrap: wrap;
						}
					}
				}
			}
		}
	}

	@media (max-width: 376px) {
		h2 {
			font-size: 1.8rem;
		}
		h3 {
			font-size: 1.4rem;
		}
		h4 {
			font-size: 1.2rem;
		}
	}
`;

const S = { RecruitCreatePage };

export default S;
