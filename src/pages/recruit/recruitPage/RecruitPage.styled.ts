import styled from 'styled-components';

interface RecruitPage {
	$isFieldClick: boolean;
	$isDetailedClick: boolean;
	$isDetailSelected: boolean;
}

const RecruitPage = styled.div<RecruitPage>`
	width: clamp(45%, 96rem, 75%);
	margin: 0 auto;
	position: relative;

	h2 {
		color: #373f41;
		font-size: 2.4rem;
		font-weight: 700;
		line-height: 2.9rem;
		letter-spacing: 0.0048rem;
	}

	h3 {
		color: #8e8e8e;
		font-size: 2rem;
		font-weight: 600;
		line-height: 2.4rem;
		letter-spacing: 0.004rem;
	}

	.body1 {
		color: #8e8e8e;
		font-size: 1.6rem;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
	}

	.body2 {
		color: #5877fc;
		font-size: 1.4rem;
		font-weight: 600;
		letter-spacing: 0.0028rem;
	}

	.t1 {
		color: #373f41;
		font-size: 1.2rem;
		font-weight: 600;
		line-height: 1.4rem;
		letter-spacing: 0.0024rem;
	}

	.nav-info {
		color: #373f41;
		font-family: Pretendard;
		font-size: 1.4rem;
		font-weight: 600;
	}

	.wrapper-title {
		display: flex;
		align-items: center;
		margin-top: 6rem;
		gap: 1.6rem;
		position: relative;

		.sep {
			font-size: 3rem;
			color: #e3e3e3;
		}

		.container-field {
			display: flex;
			align-items: center;
			cursor: pointer;
		}

		.dropdown-field {
			position: absolute;
			top: 3.7rem;
			left: 13rem;
			width: 46rem;
			height: 31.2rem;
			padding: 1.8rem 2rem;
			box-sizing: border-box;
			z-index: 500;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 1.2rem;
			border-radius: 1rem;
			border: 1px solid #e3e3e3;
			background: #fff;
			box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

			.container-keys {
				display: flex;
				flex-wrap: wrap;
				width: 100%;

				.field-key {
					display: flex;
					width: 13.2rem;
					height: 4.8rem;
					padding: 1.2rem 3.2rem;
					box-sizing: border-box;
					justify-content: center;
					align-items: center;
					border-radius: 1rem;
					border: 1px solid ${props => (props.$isFieldClick ? '#5877fc' : '#e3e3e3')};
					background: #fff;
					color: ${props => (props.$isFieldClick ? '#373F41' : '#8e8e8e')};
					font-size: 1.6rem;
					letter-spacing: 0.0032rem;
					cursor: pointer;

					&:focus-within {
						border-color: #5877fc;
						color: #373f41;
					}

					&:hover {
						border-color: #5877fc;
						transition: 0.2s ease-in-out;
					}
				}
			}

			.container-btns {
				display: flex;
				align-items: center;
				gap: 1.6rem;
				justify-content: flex-end;

				.clear {
					display: flex;
					align-items: center;
					gap: 0.4rem;
					cursor: pointer;

					span {
						margin-top: 0.2rem;
						font-size: 1.4rem;
						letter-spacing: 0.0028rem;
						color: #8e8e8e;
					}
				}

				button {
					display: flex;
					height: 3.6rem;
					padding: 1.2rem 2rem;
					box-sizing: border-box;
					border-radius: 0.6rem;
					background: #5877fc;
					color: #fff;
					font-size: 1.4rem;
					line-height: 1.7rem;
					justify-content: center;
					align-items: center;
				}
			}
		}
	}

	.wrapper-filters {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 3.2rem;

		.container-filters {
			display: flex;
			align-items: center;
			gap: 1.6rem;

			.dropdown-detailed {
				position: relative;
				display: flex;
				align-items: center;
				width: 13.5rem;
				padding: 1.2rem 1rem 1.2rem 1.6rem;
				border: 1px solid #e0e6ff;
				box-sizing: border-box;
				border-radius: 0.6rem;
				font-size: 1.5rem;
				color: #373f41;
				font-weight: 400;
				height: 4.8rem;
				cursor: pointer;

				.selected {
					color: ${props => (props.$isDetailSelected ? '#5877FC' : '#373f41')};
					font-weight: ${props => (props.$isDetailSelected ? '600' : '500')};
				}

				&:hover {
					border: 1px solid #5877fc;
				}

				.dropdown-box {
					display: flex;
					align-items: center;
					width: 100%;
					justify-content: space-between;
					gap: 1.6rem;
				}

				.container-dropdown {
					position: absolute;
					top: 5rem;
					left: 0rem;
					display: flex;
					width: 74.8rem;
					height: 39.9rem;
					align-items: flex-start;
					border-radius: 1rem;
					border: 1px solid #e3e3e3;
					background: #fff;
					box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
					z-index: 501;

					@media (max-width: 600px) {
						width: 40rem;
						height: auto;
						flex-direction: column;
						margin: 1rem auto;
						padding: 0.8rem;
						font-size: 0.8rem;
						text-align: center;
					}

					@media (max-width: 431px) {
						width: 37rem;
						height: auto;
						flex-direction: column;
						margin: 1rem auto;
						padding: 0.8rem;
						font-size: 0.8rem;
						text-align: center;
					}

					@media (max-width: 390px) {
						width: 34rem;
					}

					.sidebar {
						display: flex;
						width: 10rem;
						height: 100%;
						padding: 2.8rem 2.8rem 2.8rem 3.2rem;
						box-sizing: border-box;
						flex-direction: column;
						border-right: 0.1rem solid #e3e3e3;
						gap: 2.1rem;

						.sidebar-elem {
							cursor: pointer;
						}

						.active {
							color: #151515;
						}

						@media (max-width: 431px) {
							flex-direction: row;
							border-right: none;
							border-bottom: 0.1rem solid #e3e3e3;
							width: 100%;
							padding: 1.6rem 1.6rem 1.6rem 2rem;
						}
					}

					.dropdown-search {
						width: 100%;
						padding: 2.8rem 3.2rem 2.8rem 2.8rem;
						box-sizing: border-box;
						display: flex;
						flex-direction: column;
						gap: 2rem;
						position: relative;

						.search {
							height: 4.8rem;
							border-radius: 1rem;
							border: 1px solid #e3e3e3;
							background: #fff;
							display: flex;
							align-items: center;
							justify-content: space-between;
							padding: 1.2rem 1.6rem;
							box-sizing: border-box;

							input {
								padding: 0;
								margin: 0;
								border: none;
								outline: none;
							}
						}

						.role-menu {
							position: absolute;
							width: 59rem;
							top: 12rem;
							border-radius: 1rem;
							border: 1px solid #e3e3e3;
							padding: 1.2rem 1.6rem;
							box-sizing: border-box;
							background: #fff;
							box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

							ul {
								width: 100%;
								display: flex;
								flex-direction: column;
								align-items: flex-start;
								gap: 1.2rem;
								color: #8e8e8e;

								li {
									width: 100%;
									cursor: pointer;
									&:hover {
										color: #373f41;
									}
								}
							}

							@media (max-width: 431px) {
								top: 14rem;
								border-bottom: 0.1rem solid #e3e3e3;
								width: 82.5%;
								padding: 1.6rem 1.6rem 1.6rem 2rem;

								ul {
									display: flex;
									flex-direction: column;
									flex-wrap: wrap;

									li {
										display: flex;
										flex-wrap: wrap;
										justify-content: flex-start;
									}
								}
							}
						}

						.container-tag {
							display: flex;
							width: 100%;
							min-height: 18rem;
							padding: 1.8rem 2rem;
							align-items: flex-start;
							align-content: flex-start;
							gap: 1.6rem;
							flex-wrap: wrap;
							border-radius: 1rem;
							background: #f8fafb;

							.tags {
								display: flex;
								height: auto;
								padding: 0.7rem 0 0.7rem 1.125rem;
								justify-content: center;
								align-items: center;
								flex-shrink: 1;
								margin: 5px;
								border-radius: 7.5rem;
								background: #e0e6ff;
								color: #373f41;
								font-size: 1.5rem;
								font-style: normal;
								font-weight: 400;
								line-height: 1.8rem;
								letter-spacing: 0.02rem;
								box-sizing: border-box;
							}

							button {
								display: flex;
								justify-content: center;
								align-items: center;
								background-color: transparent;
								margin-left: 5px;
								border-radius: 50%;
								color: #54a0ff;
								border: none;
								box-sizing: border-box;
								cursor: pointer;

								img {
									width: 2rem;
									box-sizing: border-box;
								}
							}

							@media (max-width: 431px) {
								.container-tag {
									max-height: 18rem;
									overflow-y: auto;

									.tags {
										display: flex;
										flex-wrap: wrap;
										padding: 0.5rem 1rem;
										margin: 0.5rem;
										flex-shrink: 1;
									}
								}
								button {
									margin-left: 0.5rem;

									img {
										width: 1.5rem;
										box-sizing: border-box;
									}
								}
							}
						}

						.container-btns {
							display: flex;
							align-items: center;
							gap: 1.6rem;
							justify-content: flex-end;

							.clear {
								display: flex;
								align-items: center;
								gap: 0.4rem;
								cursor: pointer;

								span {
									margin-top: 0.2rem;
									font-size: 1.4rem;
									letter-spacing: 0.0028rem;
									color: #8e8e8e;
								}
							}

							button {
								display: flex;
								height: 3.6rem;
								padding: 1.2rem 2rem;
								box-sizing: border-box;
								border-radius: 0.6rem;
								background: #5877fc;
								color: #fff;
								font-size: 1.4rem;
								line-height: 1.7rem;
								justify-content: center;
								align-items: center;
							}
						}
					}
				}
			}

			.clear {
				display: flex;
				align-items: center;
				gap: 0.4rem;
				cursor: pointer;

				span {
					margin-top: 0.2rem;
					font-size: 1.4rem;
					letter-spacing: 0.0028rem;
					color: #8e8e8e;
				}
			}
		}

		.container-options__search {
			display: inline-flex;
			justify-content: flex-start;
			padding: 1.2rem 1.6rem;
			box-sizing: border-box;
			align-items: center;
			width: 26rem;
			gap: 1.2rem;
			border-radius: 7.5rem;
			border: 0.75px solid #dcdcdc;
			background: #fff;
			color: #373f41;

			&:hover {
				transition: 0.2s ease-in-out;
				border: 0.75px solid #5877fc;
			}

			&:focus-within {
				border: 0.75px solid #5877fc;

				.search-icon {
					filter: invert(0%) sepia(83%) saturate(7431%) hue-rotate(54deg) brightness(77%)
						contrast(114%);
				}
			}

			input {
				width: 100%;
				border: none;
				outline: none;
				background-color: transparent;
				font-size: 1.4rem;
			}

			.clear-keyword {
				cursor: pointer;
				padding: 0;
				margin: 0;
				width: 2rem;
			}
		}
	}

	hr {
		margin: 2.32rem auto;
		background: #e3e3e3;
		height: 0.75px;
		border: 0;
	}

	.container-contents {
		margin-top: 2rem;
		display: flex;
		min-height: 40rem;
		flex-direction: column;
		gap: 3.75rem;
		margin-bottom: 5rem;

		.bookmark-intro {
			display: flex;
			align-items: center;
			gap: 0.8rem;
			cursor: pointer;
			width: 15rem;

			img {
				width: 1.4rem;
				height: 1.8rem;
			}
		}

		.container-contents__grid {
			margin-top: 2rem;
			flex-wrap: wrap;
			row-gap: 1.8rem;
			column-gap: 1.5rem;
			display: flex;

			@media (max-width: 600px) {
				display: grid;
				margin: 2rem auto;
				margin-left: -1rem;
				grid-template-columns: repeat(2, 1fr);
				row-gap: 1.8rem;
			}

			@media (max-width: 431px) {
				display: grid;
				margin: 2rem auto;
				grid-template-columns: repeat(1, 1fr);
				row-gap: 1.8rem;
				justify-items: center;
			}
		}

		.no-results {
			margin-top: 15rem;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 2rem;
			font-weight: 600;
			color: #8e8e8e;
		}
	}

	.container-pagination {
		display: flex;
		justify-content: center;
		align-items: center;

		ul {
			list-style: none;
			display: flex;
		}
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
	.btn-floating {
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
	}

	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 105;
		background-color: rgba(0, 0, 0, 0.15);
	}

	@media (max-width: 1200px) {
		width: 90%;

		.wrapper-title {
			.sep {
				font-size: 2rem;
			}
		}

		.container-contents__grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 920px) {
		.wrapper-filters {
			flex-direction: column;
			align-items: flex-start;
			gap: 1.6rem;
		}
	}

	@media (max-width: 768px) {
		.wrapper-title {
			.sep {
				font-size: 1.5rem;
			}
		}
		.wrapper-filters {
			flex-direction: column;
			align-items: flex-start;
			gap: 1.6rem;

			.container-options__search {
				width: 100%;
			}
		}

		.container-contents__grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.wrapper-title {
			gap: 0.8rem;
		}

		.container-filters {
			flex-wrap: wrap;
			gap: 0.8rem;
		}

		.wrapper-filters {
			.container-options__search {
				width: 100%;
			}
		}
	}

	@media (max-width: 431px) {
		.wrapper-title {
			gap: 0.4rem;

			.dropdown-field {
				width: 100%;
				height: 20rem;
				left: 0;
			}
		}

		.container-filters {
			flex-wrap: wrap;
			gap: 0.4rem;
		}

		.wrapper-filters {
			.container-options__search {
				width: 100%;
			}

			.dropdown-detailed {
				min-width: 15rem;

				.container-dropdown {
					width: 100%;
				}
			}
		}
	}
`;

const S = { RecruitPage };

export default S;
