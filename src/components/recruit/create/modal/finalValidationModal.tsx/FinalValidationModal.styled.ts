import styled from 'styled-components';

const FinalValidationModal = styled.div`
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

	@media (max-width: 450px) {
		width: 90%;
		margin-bottom: 10rem;

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
`;

const S = { FinalValidationModal };

export default S;
