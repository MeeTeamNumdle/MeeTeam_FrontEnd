import styled from 'styled-components';

const ApplySubmit = styled.div`
	.container-apply__form {
		display: flex;
		flex-direction: column;
		gap: 1.8rem;

		.container-apply__form-title {
			color: #000;

			font-size: 1.8rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.8rem; /* 100% */
			letter-spacing: -0.036rem;
		}

		.container-apply__form-short_info {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			gap: 1.95rem 2.17rem;
		}

		.container-apply__form-long_info {
			margin-top: 0.3rem;
			display: flex;
			flex-direction: column;
			gap: 1.8rem;
		}

		.info {
			display: flex;
			align-items: center;
			gap: 3.75rem;
		}

		.email {
			gap: 2.45rem;
		}

		.info-subtitle {
			color: var(--Light-Black, var(--text-color-2, #373f41));

			font-size: 1.5rem;
			font-style: normal;
			font-weight: 400;
			line-height: 140%; /* 2.1rem */
			letter-spacing: 0.015rem;
		}

		.info-value {
			color: var(--Light-Black, var(--text-color-2, #373f41));

			font-size: 1.5rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.35rem; /* 90% */
			letter-spacing: 0.015rem;
		}

		.container-apply__form-warn {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.2rem;
			border-radius: 0.6rem;
			background: #fff;
			padding: 1.72rem 0rem;
			box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.1);

			span:nth-child(1) {
				color: #000;

				font-size: 1.5rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.8rem; /* 120% */
				letter-spacing: -0.03rem;
			}
			span:nth-child(2) {
				color: #686868;

				font-size: 1.05rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.8rem; /* 171.429% */
				letter-spacing: -0.021rem;
			}
		}

		.container-apply__form-buttons {
			display: flex;
			justify-content: center;
			gap: 1.35rem;

			.btn {
				display: flex;
				width: 12.15rem;
				height: 3.75rem;
				padding: 0.75rem;
				justify-content: center;
				align-items: center;
				gap: 0.75rem;
				flex-shrink: 0;
				border-radius: 0.6rem;
				color: var(--Light-Black, var(--text-color-2, #373f41));

				font-size: 1.5rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.35rem; /* 90% */
				letter-spacing: 0.015rem;
			}

			.back {
				border: 0.75px solid var(--main-color, #5877fc);
				background: #fff;
			}

			.submit {
				background: var(--main-color, #5877fc);
				color: #fff;
			}
		}
	}
`;

const S = { ApplySubmit };

export default S;
