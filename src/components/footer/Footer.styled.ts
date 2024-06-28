import styled from 'styled-components';

const Footer = styled.article`
	width: 100%;
	background: #f6f6f6;
	height: 24.8rem;

	.wrapper {
		width: clamp(45%, 96rem, 75%);
		display: flex;
		justify-content: space-between;
		padding: 6.5rem 0;
		font-family: Pretendard;
		margin: 0 auto;
	}

	h3 {
		color: #373f41;
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 0.4rem;
	}

	h5 {
		color: #373f41;
		font-size: 1.6rem;
		font-weight: 600;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
	}

	.copyright {
		color: #8e8e8e;
		font-family: Pretendard;
		font-size: 1.4rem;
		line-height: 1.6rem;
		letter-spacing: 0.0028rem;
	}

	.wrapper-logo {
		display: flex;
		flex-direction: column;

		.container-logo {
			display: flex;
			align-items: center;
		}

		.logo {
			width: 3.9514rem;
			height: 4.424rem;
			flex-shrink: 0;
		}

		.logo-name {
			width: 4.9949rem;
			height: 3.008rem;
			flex-shrink: 0;
			margin-left: 1.05rem;
		}

		.container-copyright {
			display: flex;
			flex-direction: column;
			margin-top: 3.6rem;
		}
	}

	.wrapper-menu {
		display: flex;
		margin-top: 7.63rem;
		gap: 10rem;
		cursor: pointer;
	}

	@media (max-width: 1200px) {
		.wrapper {
			flex-direction: column;
			align-items: center;
			text-align: center;
			padding: 4rem 0;
		}

		.wrapper-logo {
			margin-bottom: 2rem;
		}

		.wrapper-menu {
			margin-top: 3rem;
			gap: 5rem;
		}
	}

	@media (max-width: 768px) {
		height: auto;

		.wrapper {
			padding: 3rem 1rem;
		}

		.wrapper-menu {
			flex-direction: column;
			gap: 2rem;
			margin-top: 2rem;
		}

		.container-logo {
			flex-direction: column;
			align-items: center;
		}

		.container-copyright {
			margin-top: 2rem;
			align-items: center;
		}
	}

	@media (max-width: 480px) {
		.logo {
			width: 3rem;
			height: 3.5rem;
		}

		.logo-name {
			width: 4rem;
			height: 2.5rem;
			margin-left: 0.5rem;
		}

		h5 {
			font-size: 1.4rem;
		}

		.copyright {
			font-size: 1.2rem;
		}

		.wrapper-menu {
			margin-top: 2.5rem;
			margin-bottom: -1rem;
		}
	}
`;

const S = { Footer };

export default S;
