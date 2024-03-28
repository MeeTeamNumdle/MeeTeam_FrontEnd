import styled from 'styled-components';

const Header = styled.div`
	position: relative;
	.header {
		display: flex;
		height: 6.75rem;
		justify-content: space-between;
		align-items: center;
		flex-shrink: 0;
		background-color: #fff;
		border-bottom: 0.375px solid #e3e3e3;
	}

	.header__logo {
		display: flex;
		/* width: 12rem; */
		height: 1.29563rem;
		justify-content: flex-end;
		align-items: center;
		flex-shrink: 0;
		margin-left: 22.88rem;
		cursor: pointer;

		img {
			width: 4rem;
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
				z-index: 501;

				box-sizing: border-box;
				/* box */
				box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);

				.message {
					padding: 0 3.9rem 0 3.9rem;
					color: #373f41;
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
				top: 4rem;
				right: 0rem;
				width: 15rem;
				background: #fff;
				box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);
				border-radius: 0.8rem;
				display: flex;
				flex-direction: column;
				gap: 2rem;
				padding: 2rem 2.8rem;
				z-index: 501;
			}

			.menu {
				color: var(--Light-Black, var(--text-color-2, #373f41));
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

	.search-box {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: #fff;
		z-index: 1001;

		.search-box__container {
			width: 70.8rem;
			display: flex;
			flex-direction: column;
			margin: 0 auto;
			position: relative;

			.search-box__bar {
				margin-top: 21.2rem;
				display: inline-flex;
				justify-content: flex-start;
				align-items: center;
				width: 100%;

				img {
					position: absolute;
					left: 2rem;
					top: 22.7rem;
				}

				.container-input {
					width: 100%;
					input {
						display: flex;
						margin: 0 auto;
						width: 100%;
						height: 5rem;
						padding: 0.6rem 1.8rem 0.6rem 5rem;
						box-sizing: border-box;
						align-items: center;
						gap: 1rem;
						flex-shrink: 0;
						border-radius: 10rem;
						background: var(--sub-color, #e0e6ff);
						border: none;
						outline: none;
						font-size: 1.8rem;
						font-weight: 400;
					}
				}
			}

			.subtitle {
				color: #373f41;
				font-size: 2.2rem;
				font-style: normal;
				font-weight: 400;
				line-height: 5.6rem;
				letter-spacing: 0.02rem;
			}

			.word_recent {
				color: var(--main-color, #5877fc);
				font-size: 2rem;
				font-style: normal;
				font-weight: 400;
				line-height: 120%; /* 2.88rem */
				letter-spacing: -0.048rem;
			}

			.keyword {
				color: #696969;
				font-size: 2rem;
				font-style: normal;
				font-weight: 400;
				line-height: 170%; /* 4.08rem */
				letter-spacing: -0.048rem;
				cursor: pointer;
			}

			.search-box__recent {
				display: flex;
				flex-direction: column;
				margin-top: 2.8rem;
				min-height: 10rem;

				.container-elements__recent {
					display: flex;
					gap: 1rem;
					flex-wrap: wrap;

					.element {
						display: flex;
						height: 4.7rem;
						width: 18rem;
						padding: 0.5rem 2rem 0.5rem 3rem;
						justify-content: center;
						align-items: center;
						gap: 0.6rem;
						border-radius: 10rem;
						border: 1px solid #6091f0;
						background: #fff;

						span {
							cursor: pointer;
						}

						img {
							width: 2.5rem;
							margin-bottom: 0.4rem;
							cursor: pointer;
						}
					}
				}
			}

			.search-box__popular {
				margin-top: 4.5rem;
				display: flex;
				flex-direction: column;

				.container-keys__popular {
					display: flex;
					flex-direction: column;
				}
			}
		}

		.btn-cancel {
			position: absolute;
			top: 5rem;
			right: 30rem;

			img {
				width: 7rem;
				cursor: pointer;
			}
		}
	}
`;

const S = { Header };

export default S;
