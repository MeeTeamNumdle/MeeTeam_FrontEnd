import styled from 'styled-components';

const TitleInfo = styled.article`
	.container-header {
		display: flex;
		align-items: center;
		gap: 0.9rem;
		position: relative;

		.container-header__profile {
			display: flex;
			align-items: center;

			span {
				margin-left: 0.6rem;
				color: #373f41;
				font-size: 1.6rem;
				font-weight: 600;
				line-height: 1.9rem;
				letter-spacing: 0.0032rem;
			}
		}

		.bubble {
			color: #373f41;
			font-size: 1.4rem;
			font-weight: 600;
			line-height: 1.7rem;
			letter-spacing: 0.0028rem;
			border-radius: 2rem;
			border: 0.1rem solid #e0e6ff;
			background: #fff;
			padding: 0.8rem 1rem;
		}

		.first {
			margin-left: 0.7rem;
		}

		.date {
			margin-left: 0.8rem;
			color: #8e8e8e;
			font-size: 1.4rem;
			font-weight: 500;
			line-height: 1.7rem;
			letter-spacing: 0.0028rem;
		}

		.container-bookmark {
			position: absolute;
			right: 0rem;
			display: flex;
			align-items: center;
			gap: 0.8rem;

			.count-bookmark {
				color: #373f41;
				font-size: 1.6rem;
				letter-spacing: 0.0032rem;
				margin-top: 0.3rem;
			}
		}
	}

	h1 {
		color: #151515;
		font-size: 2.8rem;
		font-weight: 700;
		line-height: 3.6rem;
		letter-spacing: 0.0056rem;
		margin-top: 1.13rem;
	}
`;

const S = { TitleInfo };

export default S;
