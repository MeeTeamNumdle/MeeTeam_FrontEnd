import styled from 'styled-components';

const RecruitRoles = styled.article`
	margin-top: 8rem;
	width: 110%;
	overflow: hidden;

	.scroll {
		width: 100%;
		overflow-x: scroll;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.container-roles {
		width: 140%;
		margin-top: 1.98rem;
		display: flex;
		gap: 1.6rem;
		background-color: #fff;
	}
`;

const S = { RecruitRoles };

export default S;
