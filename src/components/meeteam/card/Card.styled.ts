import styled from 'styled-components';

const Card = styled.div`
	position: relative;
	width: 25.65rem;
	height: 13.5rem;
	flex-shrink: 0;
	border-radius: 0.75rem;
	cursor: pointer;

	.tag-container {
		position: relative;

		img {
			width: 100%;
			height: 100%;
			border-radius: 0.75rem;
		}
	}
`;

const PortpolioCard = styled.div`
	.container-content {
		position: relative;

		.icon-pin {
			position: absolute;
			font-size: 3rem;
			color: #eb4d4b;
			top: 0.5rem;
			right: 0.5rem;
			cursor: pointer;
			z-index: 400;
		}
	}

	.title {
		margin-top: 0.5rem;
		width: 25.65rem;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2; /* 두 줄을 표시하도록 설정 */
		-webkit-box-orient: vertical;
		word-break: break-word;
		color: var(--Light-Black, var(--text-color-2, #373f41));
		text-overflow: ellipsis;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 130%; /* 2.145rem */
		letter-spacing: 0.015rem;
		cursor: pointer;
		transition: 0.2s; /* hover 효과를 부드럽게 만들기 위한 트랜지션 */

		&:hover {
			color: #5877fc; /* hover 시의 색상 */
			text-decoration: underline; /* hover 시에 밑줄 표시 */
		}
	}
`;

const RecruitCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 25.65rem;
	height: 18.375rem;
	flex-shrink: 0;
	border-radius: 0.75rem;
	border: 1.5px solid var(--main-color, #ababab);
	background: #f9f9f9;
	padding: 1.35rem 1.5rem 1.8rem 1.5rem;
	cursor: pointer;

	&:hover {
		transition: 0.7s;
		border: 1.5px solid var(--main-color, #5877fc);
	}

	.content-tags {
		display: flex;
		justify-content: space-between;

		.tags {
			display: flex;
			gap: 0.6rem;

			div:nth-child(1) {
				display: flex;
				width: 4.05rem;
				height: 2.4rem;
				padding: 0.75rem;
				justify-content: center;
				align-items: center;
				gap: 0.75rem;
				border-radius: 0.6rem;
				background: #e0e6ff;
				color: #000;
				font-size: 1.2rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.35rem; /* 112.5% */
				letter-spacing: 0.015rem;
			}

			div:nth-child(2) {
				display: flex;
				width: 5.55rem;
				height: 2.4rem;
				padding: 0.75rem;
				justify-content: center;
				align-items: center;
				gap: 0.75rem;
				border-radius: 0.6rem;
				background: #e3f5ff;
				color: #373f41;
				font-size: 1.1rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.35rem; /* 112.5% */
				letter-spacing: 0.015rem;
			}
		}

		.bookmark {
			font-size: 2rem;
			color: #8e8e8e;
		}
	}

	.content-title {
		height: 4.8rem;
		flex-shrink: 0;
		margin-top: 1.65rem;
		color: #373f41;
		text-overflow: ellipsis;
		font-size: 1.65rem;
		font-style: normal;
		font-weight: 400;
		line-height: 130%;
		letter-spacing: 0.015rem;
	}

	.content-info {
		display: flex;
		margin-top: 5rem;
		justify-content: space-between;

		div {
			color: #373f41;
			font-size: 1.2rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.35rem;
			letter-spacing: 0.015rem;
		}
	}
`;

const S = { Card, PortpolioCard, RecruitCard };

export default S;
