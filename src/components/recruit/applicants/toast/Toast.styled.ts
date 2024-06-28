import styled from 'styled-components';

interface ToastProps {
	isOpen: boolean;
}

const ToastContainer = styled.article<ToastProps>`
	position: fixed;
	bottom: 2rem;
	left: 50%;
	display: flex;
	align-items: center;
	padding: 2.2rem 4rem;
	transform: translateX(-50%);
	color: #f3f5ff;
	gap: 1.2rem;
	box-sizing: border-box;
	opacity: 1;
	visibility: visible;
	transition: opacity 0.2s ease-in-out;
	z-index: 10001;
	border-radius: 5rem;
	border: 2px solid #6b6f81;
	background: #6b6f81;
	box-shadow:
		0px 4px 20px 0px rgba(0, 0, 0, 0.1),
		0px 2px 2px 0px rgba(0, 0, 0, 0.25);

	.body1-medium {
		font-size: 1.6rem;
		letter-spacing: 0.0032rem;
		margin-top: 0.5rem;
		font-weight: 600;
	}

	.white {
		color: #ffffff;
	}

	img {
		margin-top: 0.25rem;
	}

	@media (max-width: 450px) {
		padding: 1.6rem 2.4rem;
		width: 80%;
	}
`;

const S = { ToastContainer };

export default S;
