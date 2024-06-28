import styled from 'styled-components';

const ApplyClose = styled.section`
	display: flex;
	width: 31rem;
	height: 23.2rem;
	padding: 1.8rem 2rem;
	flex-direction: column;
	align-items: center;
	border-radius: 1rem;
	border: 1px solid #e3e3e3;
	background: #f8fafb;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 501;

	.description {
		margin-top: 2.8rem;
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
	}

	.body2-medium {
		color: #373f41;
		text-align: center;
		font-size: 1.4rem;
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;
	}

	.btn-txt {
		color: #373f41;
		font-size: 1.4rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;
	}

	.btn-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 4rem;
		gap: 1.6rem;

		button {
			display: flex;
			height: 3.6rem;
			padding: 1.2rem 2rem;
			justify-content: center;
			align-items: center;
			border-radius: 0.6rem;
		}

		.cancel {
			min-width: 12.4rem;
			border: 1px solid #e3e3e3;
			background: #fff;
		}

		.confirm {
			min-width: 12.4rem;
			background: #f85858;
			color: #f8fafb;
		}
	}
	@media (max-width: 450px) {
		width: 70%;
		padding: 1.8rem 2rem;
		font-size: 0.9rem;

		.btn-container {
			display: flex;
			justify-content: center;
			.cancel {
				padding: 0.6rem;
				min-width: 100%;
			}
			.confirm {
				padding: 0.6rem;
				min-width: 100%;
			}
		}
	}

	@media (max-width: 376px) {
		width: 70%;
		padding: 1.8rem 2rem;
		font-size: 0.8rem;

		.btn-container {
			display: flex;
			justify-content: center;
			.cancel {
				padding: 0.6rem;
				min-width: 100%;
			}
			.confirm {
				padding: 0.6rem;
				min-width: 100%;
			}
		}
	}
`;

const S = { ApplyClose };

export default S;
