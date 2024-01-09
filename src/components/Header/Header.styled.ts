import styled from 'styled-components';

const Header = styled.div`
	.header {
		display: flex;
		height: 6.75rem;
		justify-content: space-between;
		align-items: center;
		flex-shrink: 0;
		background-color: #f0f0f0;
	}

	.header__logo {
		display: flex;
		width: 10.79338rem;
		height: 1.29563rem;
		justify-content: flex-end;
		align-items: center;
		flex-shrink: 0;
		margin-left: 14.88rem;
		cursor: pointer;

		.header__logo--bridge {
			left: 14.5rem;
			top: 2.6rem;
		}
	}

	.header__navigation {
		display: flex;
		width: 40%;
		justify-content: flex-start;
		align-items: center;
		gap: 4.5rem;

		.header__navigation--navi-text {
			color: #515565;
			font-family: Inter;
			font-size: 1.5rem;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			cursor: pointer;
		}
		.here {
			color: #5f5cec;
			transition: 0.2s;
		}
	}

	.header__menu {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-right: 5%;
		width: 15%;
		gap: 7%;

		.header__menu--search {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #121212;
			font-size: 2.6rem;
			font-weight: 200;
			cursor: pointer;
		}

		.header__menu--alarm {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #121212;
			font-size: 2.6rem;
			font-weight: 300;
			cursor: pointer;

			.icon {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.dot {
				position: absolute;
				width: 0.8rem;
				height: 0.8rem;
				background-color: #614bf7;
				border-radius: 50%;
				top: -0.5rem;
				left: -0.5rem;
			}

			.alarm-dropdown {
				position: absolute;
				width: 35.6rem;
				flex-shrink: 0;
				border-radius: 0.8rem;
				background: #fff;
				top: 4rem;
				right: -2rem;

				box-sizing: border-box;
				/* box */
				box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);

				.message {
					padding: 0 3.9rem 0 3.9rem;
					color: #373f41;
					font-family: Apple SD Gothic Neo;
					font-size: 1.5rem;
					font-style: normal;
					font-weight: 400;
					line-height: 120%; /* 1.92rem */
					letter-spacing: 0.02rem;
				}

				.apply {
					margin-top: 2rem;
					display: flex;
					justify-content: space-between;
				}

				.dot2 {
					position: absolute;
					width: 0.8rem;
					height: 0.8rem;
					background-color: #614bf7;
					border-radius: 50%;
					top: 1.6rem;
					left: 2rem;
				}

				.issue {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					margin-bottom: 2rem;
				}

				hr {
					width: 90%;
				}
			}
		}

		.header__menu--create {
			width: 3rem;
			height: 3rem;
			flex-shrink: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
		}

		.header__menu--my {
			position: relative;
			display: flex;
			justify-content: center;
			width: 3rem;
			height: 3rem;
			border: 2px solid #000;
			border-radius: 50%;
			font-size: 2.6rem;
			cursor: pointer;

			.icon {
				position: absolute;
			}

			.dropdown {
				position: absolute;
				top: 3rem;
				right: -3rem;
				width: 15rem;
				background-color: #f0f0f0;
				border-radius: 0.8rem;
				display: flex;
				flex-direction: column;
				gap: 2rem;
				padding: 2rem 2.8rem;
			}

			.menu {
				color: var(--Light-Black, var(--text-color-2, #373f41));
				font-family: Apple SD Gothic Neo;
				font-size: 1.6rem;
				font-style: normal;
				font-weight: 400;
				line-height: 120%; /* 1.92rem */
				letter-spacing: 0.02rem;

				&:hover {
					color: #614bf7;
					transition: 0.1s;
				}
			}
		}
	}
`;

const S = { Header };

export default S;
