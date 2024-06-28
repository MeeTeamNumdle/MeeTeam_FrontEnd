import styled from 'styled-components';

interface RecruitStyle {
	$isClosed: boolean;
}

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

const RecruitCard = styled.article<RecruitStyle>`
	display: flex;
	flex-direction: column;
	width: 22.8rem;
	height: 18.8rem;
	flex-shrink: 0;
	padding: 1.8rem 2rem;
	border-radius: 1rem;
	border: 1px solid #e3e3e3;
	background: ${props => (props.$isClosed ? '#EDEDED' : '#fff')};
	justify-content: space-between;

	@media (max-width: 431px) {
		width: 100%;
		padding: 2rem 2.4rem;
	}

	cursor: pointer;

	&:hover {
		transition: 0.3s;
		border-color: #5877fc;
	}

	.txt2 {
		color: #8e8e8e;
		font-size: 1.2rem;
		line-height: 1.4rem;
		letter-spacing: 0.0024rem;
	}

	.content-tags {
		display: flex;
		flex-direction: column;

		.header {
			display: flex;
			justify-content: space-between;
			.tags {
				display: flex;
				gap: 0.6rem;

				.tag {
					display: inline-flex;
					padding: 0.4rem;
					align-items: center;
					gap: 0.4rem;
					border-radius: 0.4rem;
					font-size: 1.2rem;
					line-height: 1.4rem;
					letter-spacing: 0.0024rem;
				}

				.scope {
					background: #ffe7fe;
					color: #f979dd;
				}

				.category {
					background: #c9deff;
					color: #5877fc;
				}
			}
		}
	}

	.content-title {
		margin-top: 1.6rem;
		overflow: hidden;
		color: ${props => (props.$isClosed ? '#8E8E8E' : '#373f41')};
		text-overflow: ellipsis;
		white-space: wrap;
		-webkit-line-clamp: 3;
		font-size: 1.6rem;
		font-weight: 600;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
	}

	.content-info {
		display: flex;
		margin-top: 3.2rem;
		justify-content: space-between;
		align-items: center;

		.user {
			display: flex;
			align-items: center;
			gap: 0.56rem;
		}

		.date {
			color: #8e8e8e;
			font-size: 1.2rem;
			line-height: 1.4rem;
			letter-spacing: 0.0024rem;
		}

		.closed {
			display: flex;
			padding: 0.4rem 0.8rem;
			justify-content: center;
			align-items: center;
			border-radius: 1.5rem;
			border: 1px solid #8e8e8e;
			background: #e3e3e3;
		}
	}
`;

const S = { Card, PortpolioCard, RecruitCard };

export default S;
