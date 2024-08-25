import styled from 'styled-components';

const FloatingButton = styled.article`
	position: fixed;
	bottom: 5rem;
	right: 5rem;
	z-index: 101;

	.container-btn {
		width: 5.6rem;
		height: 5.6rem;
		display: flex;
		justify-content: center;
		align-items: center;

		.floating-icon {
			width: 2.4rem;
			height: 2.4rem;
		}
	}

	.floating-menu {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
		position: fixed;
		bottom: 12.6rem;
		right: 5.55rem;
		z-index: 101;
	}

	.container-menu {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1rem;
	}

	.menu {
		position: relative;
		width: 4.6rem;
		height: 4.6rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.floating {
		border-radius: 50%;
		box-shadow:
			0px 4px 20px 0px rgba(0, 0, 0, 0.1),
			0px 2px 2px 0px rgba(0, 0, 0, 0.25);
		cursor: pointer;
		background-color: #5877fc;
	}

	.cancel-icon {
		background-color: #ededed;
	}
`;

const S = { FloatingButton };

export default S;
