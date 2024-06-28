import styled from 'styled-components';

const DetailedInformation = styled.section`
	.container-details {
		display: flex;
		width: 100%;
		margin-top: 4rem;

		.container-details__editor {
			width: 76.4rem;
			display: flex;
			flex-direction: column;

			.intro {
				color: #373f41;
				font-size: 1.4rem;
				font-weight: 600;
				line-height: 1.7rem;
				letter-spacing: 0.0028rem;

				.necessary {
					color: #f85858;
				}
			}

			.editor {
				background-color: #fff;
				border-radius: 0.1rem;
				width: 100%;
				margin-top: 0.8rem;
				margin-bottom: 4rem;
				strong {
					font-weight: bold;
				}
				em {
					font-style: italic;
				}
			}

			.ql-container.ql-snow {
				border: 0.1rem solid #e3e3e3;
				border-bottom-right-radius: 0.75rem;
				border-bottom-left-radius: 0.75rem;
				min-height: 37rem;
			}

			.ql-toolbar.ql-snow {
				border: 0.75px solid #e3e3e3;
				border-top-right-radius: 0.75rem;
				border-top-left-radius: 0.75rem;
				box-sizing: border-box;
				font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
				padding: 0.8rem;
			}

			.ql-editor {
				font-size: 1.6rem;
			}
		}

		.valid-msg {
			margin: 0.4rem 0 0 1rem;
			color: #f85858;
			font-size: 1rem;
			line-height: 1.2rem;
			letter-spacing: 0.002rem;
		}
	}

	@media (max-width: 450px) {
		.container-details {
			flex-direction: column;
			margin-top: 2rem;
			width: 100%;

			.subtitle {
				margin-bottom: 1.5rem;
				width: 100%;

				h4 {
					font-size: 2rem;
					/* text-align: center; */
					margin-bottom: 1.5rem;
				}
			}

			.container-details__editor {
				width: 100%;
			}
		}
	}
`;

const S = { DetailedInformation };

export default S;
