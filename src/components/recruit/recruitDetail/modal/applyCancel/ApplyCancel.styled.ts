import styled from 'styled-components';

const ApplyCancel = styled.section`
	display: flex;
	flex-direction: column;
	height: 23.2rem;
	padding: 1.8rem 2rem;
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
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;
	}

	.btn-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 4.1rem;
		gap: 1.6rem;

		button {
			display: flex;
			height: 3.6rem;
			padding: 1.2rem 2rem;
			box-sizing: border-box;
			justify-content: center;
			align-items: center;
			border-radius: 0.6rem;
		}

		.cancel {
			border: 1px solid #e3e3e3;
			background: #fff;
		}

		.confirm {
			background: #f85858;
			color: #f8fafb;
		}
	}

	@media (max-width: 450px) {
		width: 70%;
		padding: 1.5rem 1.5rem;
		height: auto;

		.description {
			margin-top: 2rem;
		}

		.body2-medium {
			font-size: 1.2rem;
			line-height: 1.5rem;
		}
	}

	@media (max-width: 376px) {
		padding: 1rem 1rem;
		height: auto;

		.description {
			margin-top: 1.5rem;
		}

		.body2-medium {
			font-size: 1rem;
			line-height: 1.3rem;
		}
	}
`;

const S = { ApplyCancel };

export default S;
