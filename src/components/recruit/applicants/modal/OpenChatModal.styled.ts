import styled from 'styled-components';

const TutorialModal = styled.section`
	display: flex;
	width: 42rem;
	height: 22.8rem;
	padding: 1.8rem 2rem;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: 1rem;
	border: 1px solid #e3e3e3;
	background: #f8fafb;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 501;

	h3 {
		color: #151515;
		font-size: 2rem;
		font-weight: 600;
		line-height: 2.4rem;
		letter-spacing: 0.004rem;
	}

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

		.confirm {
			background: #5877fc;
			color: #f8fafb;
		}
	}

	@media (max-width: 450px) {
		width: 80%;
		height: auto;
	}
`;

const S = { TutorialModal };

export default S;
