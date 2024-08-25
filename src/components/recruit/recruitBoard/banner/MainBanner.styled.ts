import styled from 'styled-components';

const Banner = styled.section`
	margin-top: 5rem;
	width: 100%;
	height: 206px;
	flex-shrink: 0;
	border-radius: 20px;
	background: linear-gradient(90deg, #3f80ff 0%, #c9deff 100%);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 11rem;
	box-sizing: border-box;

	.container-title {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.subtitle {
		color: #fff;
		font-family: Pretendard;
		font-size: 21.6px;
		font-style: normal;
		font-weight: 500;
		line-height: 34.8px;
		letter-spacing: 0.864px;
	}

	.title {
		color: #fff;
		font-family: Pretendard;
		font-size: 28.8px;
		font-style: normal;
		font-weight: 700;
		line-height: 34.8px;
		letter-spacing: 1.152px;
	}

	img {
		width: 177px;
		height: 178px;
		flex-shrink: 0;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
		padding: 0 2rem;
		height: 160px;

		.title {
			font-size: 2rem;
			line-height: 2rem;
			letter-spacing: 0.06rem;
		}

		.subtitle {
			font-size: 1.5rem;
			line-height: 1.6rem;
			letter-spacing: 0.04rem;
		}
	}

	@media (max-width: 431px) {
		.title {
			font-size: 1.6rem;
			line-height: 2rem;
			letter-spacing: 0.06rem;
		}

		.subtitle {
			font-size: 1.4rem;
			line-height: 1.6rem;
			letter-spacing: 0.04rem;
		}

		img {
			width: 90px;
			height: 90px;
		}
	}
`;

const S = { Banner };

export default S;
