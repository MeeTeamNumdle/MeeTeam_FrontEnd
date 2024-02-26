import styled from 'styled-components';

const RecruitPage = styled.div`
	position: relative;
	width: clamp(45%, 108rem, 75%);
	margin: 0 auto;

	.container-title {
		color: #000;
		font-size: 3.6rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.1rem;
		margin-top: 3.6rem;
	}

	.wrapper-filter {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 4.05rem;
	}

	.container-filter {
		display: flex;
		gap: 1.65rem;
		align-items: center;

		.dropdown-spec {
			display: flex;
			margin-left: 3rem;
			gap: 1.65rem;
		}
	}

	hr {
		margin-top: 2.32rem;
		margin-bottom: 2.32rem;
		background: #e0e0e0;
		height: 0.75px;
		border: 0;
	}

	.container-options__search {
		display: inline-flex;
		justify-content: flex-start;
		padding: 0.8625rem 2rem 0.8625rem 1.2rem;
		box-sizing: border-box;
		height: 3.525rem;
		align-items: center;
		width: 25.175rem;
		gap: 1.2rem;
		border-radius: 7.5rem;
		border: 0.75px solid #dcdcdc;
		background: #f9f9f9;
		color: var(--Light-Black, var(--text-color-2, #373f41));

		font-size: 1.2rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.35rem; /* 112.5% */
		letter-spacing: 0.015rem;

		svg {
			display: flex;
			align-items: center;
		}

		input {
			width: 20rem;
			border: none;
			outline: none;
			font-size: 1.2rem;
			background-color: transparent;
		}
	}

	.container-options {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.container-options__filters {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 0.75rem;
		}
	}

	.container-contents {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 3.75rem;
		margin-bottom: 5rem;

		.container-contents__row {
			.container-subtitle {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.subtitle {
				color: var(--Light-Black, var(--text-color-2, #373f41));

				font-size: 2rem;
				font-style: normal;
				font-weight: 500;
				line-height: 4.2rem;
				letter-spacing: 0.015rem;
			}

			select {
				border: none;
				outline: none;
				color: var(--Light-Black, var(--text-color-2, #373f41));

				font-size: 1.3rem;
				font-style: normal;
				font-weight: 400;
				line-height: 4.2rem; /* 280% */
				letter-spacing: 0.015rem;
			}
		}
		.contents {
			display: flex;
			margin: 0 auto;
			gap: 1.8rem;
		}

		.container-contents__grid {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 1.8rem 1.8rem;
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

	.container-floating_btn {
		position: fixed;
		top: 60rem;
		right: 10rem;

		.floating-btn {
			cursor: pointer;
		}
	}
`;

const S = { RecruitPage };

export default S;
