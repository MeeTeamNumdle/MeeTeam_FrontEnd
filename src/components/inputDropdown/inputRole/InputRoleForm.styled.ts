import styled from 'styled-components';

interface InputRoleForm {
	$isRoleClicked: boolean;
	$isSkillClicked: boolean;
	$isRoleName: boolean;
	$isCount: boolean;
	$isTagItem: boolean;
}

const InputRoleForm = styled.article<InputRoleForm>`
	width: 100%;
	display: flex;
	flex-direction: column;

	img {
		cursor: pointer;
	}

	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: auto;

		input {
			border: none;
			outline: none;
			background-color: transparent;
			overflow: hidden;
			width: 100%;

			&::placeholder {
				font-weight: 400;
			}
		}
	}

	.dropdown {
		position: absolute;
		top: 5rem;
		left: 0;
		border: ${props => (props.$isRoleClicked || props.$isSkillClicked) && '0.1rem solid #e3e3e3'};
		width: 100%;
		display: flex;
		flex-direction: column;
		font-size: 1.4rem;
		color: #8e8e8e;
		gap: 1rem;
		padding: 1.2rem 1.6rem;
		z-index: 401;
		background-color: #fff;
		border-radius: 1rem;
		box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
	}

	.dropdown-loading {
		width: 100%;
		height: 5rem;
	}

	.option {
		cursor: pointer;
	}

	.dropdown-skill {
		position: absolute;
		left: 0;
		top: 5rem;
		width: 100%;
		border-radius: 1rem;
		border: 1px solid #e3e3e3;
		background: #fff;
		box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
		z-index: 201;
		padding: 1.2rem 1.6rem;
		box-sizing: border-box;

		.list-skill {
			display: flex;
			flex-direction: column;
			gap: 1.2rem;

			.skill-element {
				cursor: pointer;
			}

			.no-result {
				display: flex;
				height: 10rem;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 1.2rem;
				align-self: stretch;
			}
		}

		hr {
			border: none;
			height: 0.1rem;
			background: #e3e3e3;
			margin-top: 1rem;
		}

		.list-selected {
			margin-top: 1rem;

			.wrapper-selected__skills {
				display: flex;
				align-items: center;
				gap: 1.2rem;

				.subtitle {
					white-space: nowrap;
					width: 6rem;
				}
			}
		}

		.mention {
			color: #8e8e8e;
			margin-top: 1.35rem;
		}
	}

	.container-selected__skills {
		display: flex;
		gap: 0.8rem;
		flex-wrap: wrap;
	}

	.outside {
		flex-wrap: nowrap;
		white-space: nowrap;
		overflow: hidden;
	}

	.ellipsis {
		margin-top: 1rem;
	}

	.valid-message__role {
		position: absolute;
		top: 5rem;
		left: 1rem;
	}

	.valid-message__count {
		width: 150%;
		position: absolute;
		top: 5rem;
		left: 1rem;
	}

	.tags {
		display: inline-flex;
		height: 2.15rem;
		padding: 0.6rem 0.8rem;
		justify-content: space-between;
		align-items: center;
		border-radius: 1.5rem;
		background: #e0e6ff;
		box-sizing: border-box;
	}

	.btn-delete__tag {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		margin-left: 0.6rem;
		color: #54a0ff;
		border: none;
		cursor: pointer;
		padding: 0;

		img {
			width: 1.4rem;
			box-sizing: border-box;
		}
	}

	.wrapper-btn__add {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		margin-top: 3.2rem;
	}

	.btn-add {
		border: none;
		background-color: transparent;
		padding: 0;
		margin-top: 0.3rem;
	}

	.btn-delete {
		display: flex;
		align-items: center;
		border: none;
		background-color: transparent;
		padding: 0;
		margin: 0;
	}

	.container-input {
		border-radius: 1rem;
		border: 1px solid #e3e3e3;
		background: #fff;
		position: relative;
		width: 100%;
		color: ${props => (props.$isRoleName || props.$isCount) && '#000000'};

		&:focus-within {
			border: 1px solid #5877fc;

			.icon-search {
				filter: invert(0%) sepia(83%) saturate(7431%) hue-rotate(54deg) brightness(77%)
					contrast(114%);
			}
		}

		&:hover {
			border: 1px solid #5877fc;
			transition: 0.2s ease-in-out;
		}
	}
	.wrapper-role {
		display: flex;
		width: 20.6rem;
		height: 4.8rem;
		padding: 1.2rem 1.6rem;
		justify-content: space-between;
		align-items: center;
		flex-shrink: 0;
	}
	.wrapper-count {
		display: flex;
		width: 8rem;
		height: 4.8rem;
		padding: 1.2rem 1.6rem;
		align-items: center;
		gap: 1rem;
		flex-shrink: 0;
		position: relative;
	}
	.wrapper-skill {
		display: flex;
		width: 44.2rem;
		height: 4.8rem;
		padding: 1.2rem 1.6rem;
		justify-content: space-between;
		align-items: center;
		flex-shrink: 0;
	}

	.input-element {
		color: ${props => (props.$isRoleName || props.$isCount || props.$isTagItem) && '#000000'};
	}

	.icon-search {
		padding-left: 1rem;
		box-sizing: border-box;
	}

	.role-search {
		filter: ${props =>
			props.$isRoleName &&
			'invert(0%) sepia(83%) saturate(7431%) hue-rotate(54deg) brightness(77%) contrast(114%)'};
	}

	.skill-search {
		filter: ${props =>
			props.$isTagItem &&
			'invert(0%) sepia(83%) saturate(7431%) hue-rotate(54deg) brightness(77%) contrast(114%)'};
	}

	@media (max-width: 450px) {
		width: 100%;
		.wrapper {
			width: 100%;
			height: auto;
			flex-wrap: wrap;
			justify-content: flex-start;
			gap: 1rem;

			.wrapper-role {
				width: 52%;
				flex-shrink: 3;
			}

			.wrapper-count {
				width: 35%;
				flex-shrink: 2;
			}

			.wrapper-skill {
				width: 90%;
				flex-shrink: 1;
			}
		}
	}
`;

const S = { InputRoleForm };

export default S;
