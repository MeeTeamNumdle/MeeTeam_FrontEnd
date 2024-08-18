import styled from 'styled-components';

interface RecruitPage {
	$isFieldClick: boolean;
	$isDetailedClick: boolean;
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
