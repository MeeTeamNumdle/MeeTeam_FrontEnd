import styled from 'styled-components';

const RecruitTag = styled.article`
	margin-top: 8rem;
	display: flex;
	flex-direction: column;

	.container-tags {
		margin-top: 2rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1.6rem;

		span {
			height: 3.2rem;
			color: #151515;
			font-size: 1.4rem;
			font-weight: 600;
			line-height: 1.7rem;
			letter-spacing: 0.0028rem;
			padding: 0.8rem 1rem;
		}
	}
`;

const S = { RecruitTag };

export default S;
