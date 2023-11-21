import styled from 'styled-components';

const MemberSelect = styled.div`
	margin: 20px 20px 10px 20px;
	display: flex;
	min-height: 80px;

	.subtitle {
		display: flex;
		width: 4rem;
		height: 1.0125rem;
		flex-direction: column;
		justify-content: center;
		flex-shrink: 0;
		color: var(--light-black, #373f41);
		font-family: Pretendard;
		font-size: 0.91rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.125rem; /* 112.5% */
		letter-spacing: 0.0125rem;
	}

	.area-profile {
		width: 20%;
		background-color: #b2bec3;
		padding: 0.55rem 0.55rem;
		box-sizing: border-box;

		.profile-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 10px 0 0 1.5rem;

			.profile-info--icon {
				width: 28px;
				height: 28px;
				border: 1.5px solid #000;
				border-radius: 50%;
				font-size: 28px;
				background-color: #ababab;
				cursor: pointer;
			}

			.profile-info--name {
				margin-right: 2.5rem;
			}
		}
	}

	.area-role {
		width: 20%;
		background-color: #ababab;
		padding: 0.55rem 0.55rem;
		box-sizing: border-box;

		.role-info {
			margin-top: 10px;
			width: 90%;
		}
	}

	.area-task {
		width: 20%;
		background-color: #95afc0;
		padding: 0.55rem 0.55rem;
		box-sizing: border-box;

		.task-info {
			margin-top: 10px;
			width: 90%;
		}
	}

	.area-qualification {
		width: 40%;
		background-color: #c7ecee;
		padding: 0.55rem 0.55rem;
		box-sizing: border-box;

		.qualification-info {
			margin-top: 10px;
			width: 90%;
		}
	}
`;

const S = { MemberSelect };

export default S;
