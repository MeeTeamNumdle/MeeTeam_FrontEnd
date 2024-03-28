import styled from 'styled-components';

const RecruitDetailPage = styled.section`
	width: clamp(33.33%, 108rem, 66.66%);
	margin: 0 auto;
	margin-top: 8.02rem;
	margin-bottom: 10rem;
	background-color: #fff;
	overflow: hidden;

	h3 {
		color: #151515;
		font-size: 2rem;
		font-weight: 600;
		line-height: 2.4rem;
		letter-spacing: 0.004rem;
	}

	.tag {
		display: flex;
		padding: 0.6rem 0.8rem;
		justify-content: center;
		align-items: center;
		gap: 0.75rem;
		box-sizing: border-box;
		border-radius: 1.5rem;
		background: #e0e6ff;
	}

	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 105;
		background-color: rgba(0, 0, 0, 0.35);
	}

	.wrapper-comments {
		.container-title {
			display: flex;
			align-items: flex-end;
			gap: 0.4rem;
			span {
				color: #5877fc;
				font-size: 1.2rem;
				font-weight: 600;
				line-height: 1.4rem;
			}
		}

		hr {
			margin-top: 1.18rem;
			background: #e3e3e3;
			border: none;
			height: 0.075rem;
		}

		.container-comments {
			padding: 1.6rem 3rem;
			box-sizing: border-box;
		}
	}
`;

const Footer = styled.footer`
	position: fixed;
	bottom: 0rem;
	width: 100%;
	height: 8.4rem;
	border-top: 0.075rem solid #e3e3e3;
	border-bottom: 0.075rem solid #e3e3e3;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;

	.container-btn {
		display: flex;
		gap: 1.6rem;

		.btn-bookmark {
			height: 4.8rem;
			padding: 1.2rem 3.2rem;
			border-radius: 0.8rem;
			border: 1.5px solid #e3e3e3;
			background: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.8rem;
			font-size: 1.5rem;
		}

		.apply {
			height: 4.8rem;
			padding: 1.2rem 7.2rem;
			border-radius: 0.6rem;
			font-size: 1.5rem;
			background: linear-gradient(90deg, #6091f0 0%, #723dff 100%);
			color: #fff;
		}

		.cancel {
			height: 4.8rem;
			padding: 1.2rem 7.2rem;
			border-radius: 0.6rem;
			font-size: 1.5rem;
			background-color: #f85858;
			color: #fff;
		}

		.btn-edit,
		.btn-delete {
			display: flex;
			width: 4.8rem;
			height: 4.8rem;
			padding: 1.2rem;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			border-radius: 1rem;
			border: 1px solid #e3e3e3;
			background: #fff;
		}

		.btn-navigate_appliers {
			display: flex;
			height: 4.8rem;
			padding: 1.2rem 3.2rem;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			border-radius: 0.6rem;
			background: #5877fc;
			color: #fff;
		}

		.btn-close {
			display: flex;
			height: 4.8rem;
			padding: 1.2rem 3.2rem;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			border-radius: 0.6rem;
			background: #f85858;
			color: #fff;
		}
	}
`;

const S = {
	RecruitDetailPage,
	Footer,
};

export default S;
