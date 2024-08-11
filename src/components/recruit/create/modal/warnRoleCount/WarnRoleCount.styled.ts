import styled from 'styled-components';

const WarnRoleCount = styled.article`
	display: flex;
	flex-direction: column;
	width: 30rem;
	padding: 1.8rem 2rem;
	align-items: center;
	border-radius: 1rem;
	border: 1px solid #e3e3e3;
	background: #f8fafb;
	position: fixed;
	justify-content: space-between;
	gap: 3.4rem;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 501;

	h3 {
		color: #151515;
		font-size: 2rem;
		font-weight: 600;
	}

	.description {
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
		margin-top: -0.6rem;
	}

	.body2-medium {
		color: #373f41;
		text-align: center;
		font-size: 1.4rem;
	}

	.btn-txt {
		color: #373f41;
		font-size: 1.4rem;
	}

	.btn-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.6rem;

		button {
			display: flex;
			height: 3.6rem;
			padding: 1.2rem 1.8rem;
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
			background: #5877fc;
			color: #f8fafb;
		}
	}
`;

const S = { WarnRoleCount };

export default S;
