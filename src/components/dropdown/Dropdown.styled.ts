import styled from 'styled-components';

const Dropdown = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	.menu {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #373f41;
		font-family: Apple SD Gothic Neo;
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.1rem; /* 233.333% */
		letter-spacing: 0.015rem;
		cursor: pointer;
		width: 10rem;

		label {
			cursor: pointer;
		}

		.dropdown {
			position: absolute;
			top: 3rem;
			width: 10rem;
			background-color: #f7f7f7;
			border-radius: 0.75rem;
			padding: 1rem 1rem;
		}
	}

	.menu-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1.6rem;
		gap: 1.2rem;

		li {
			&:hover {
				color: #5f5cec;
				transition: 0.2s;
				font-size: 1.7rem;
			}
		}
	}
`;

const S = { Dropdown };

export default S;
