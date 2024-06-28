import styled from 'styled-components';

interface RecruitRoles {
	$isRoleLength: boolean;
}

const RecruitRoles = styled.section<RecruitRoles>`
	.container-roles {
		display: flex;
		width: 100%;
		margin-top: 4rem;
		min-height: 20rem;

		.wrapper-roles {
			display: flex;
			width: 76.4rem;
			gap: 2rem;
			flex-direction: column;
			position: relative;

			.container-role__list {
				display: flex;
				flex-direction: column;
				gap: 1.6rem;
			}

			.valid-msg {
				position: absolute;
				top: 15rem;
				left: 1rem;
				color: #f85858;
				font-size: 1rem;
				line-height: 1.2rem;
				letter-spacing: 0.002rem;
			}
		}
	}
	.wrapper-btn__add {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		margin-top: 3.2rem;
		cursor: pointer;
		width: 13%;
	}

	.blue-plus {
		filter: ${props =>
			props.$isRoleLength &&
			'invert(59%) sepia(7%) saturate(7%) hue-rotate(27deg) brightness(95%) contrast(86%)'};
	}

	.btn-add {
		border: none;
		background-color: transparent;
		padding: 0;
		margin-top: 0.3rem;
		color: ${props => props.$isRoleLength && '#8e8e8e'};
	}
	.warning {
		color: #f85858;
	}

	@media (max-width: 450px) {
		width: 100%;
		.container-roles {
			flex-direction: column;
			margin-top: 2rem;
			width: 100%;

			.wrapper-roles {
				width: 100%;

				.wrapper-btn__add {
					width: 28%;
					display: flex;
				}
			}

			.subtitle {
				margin-bottom: 1.5rem;
				width: 100%;

				h4 {
					font-size: 2rem;
					margin-bottom: 1.5rem;
				}
			}
		}
	}
`;

const S = { RecruitRoles };

export default S;
