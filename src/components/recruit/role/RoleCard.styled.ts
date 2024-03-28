import styled from 'styled-components';

const RoleCard = styled.article`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 24rem;
	height: 27rem;
	border-radius: 1rem;
	border: 0.075rem solid #e3e3e3;
	background: #fff;
	padding: 1.8rem 2rem;
	box-sizing: border-box;

	.container-role__info {
		height: 8.7rem;
		section {
			display: flex;
			flex-wrap: wrap;
			margin-top: 1.2rem;
			gap: 0.8rem;
		}
	}

	h4 {
		color: #373f41;
		font-size: 1.4rem;
		font-weight: 600;
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;
	}

	hr {
		width: 100%;
		margin: 1.6rem 0;
	}

	.container-role__current {
		width: 100%;
		.apply-info {
			display: flex;
			gap: 4.8rem;
			margin-top: 1.24rem;
			margin-bottom: 1.6rem;
			width: 100%;

			.people {
				font-size: 1.2rem;
				line-height: 1.4rem;
				letter-spacing: 0.0024rem;

				span:nth-child(1) {
					color: #8e8e8e;
					font-weight: 500;
					margin-right: 0.68rem;
				}
				span:nth-child(2) {
					color: #373f41;
					font-weight: 600;
				}
			}
		}

		.progress-bar {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 90%;

			span {
				color: #373f41;
				font-size: 1rem;
				line-height: 1.2rem;
				letter-spacing: 0.002rem;
				margin-left: 2rem;
			}
		}
	}
`;

const S = { RoleCard };

export default S;
