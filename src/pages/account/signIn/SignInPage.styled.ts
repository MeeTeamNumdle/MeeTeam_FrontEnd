import styled from 'styled-components';
import Account from '../Account.styled';

const SignInPageLayout = styled(Account.AccountLayout)<{ $callBack?: boolean }>`
	${props => props.$callBack && 'visibility: hidden'};
	row-gap: 0;
	width: 34.8rem;

	.sign-in__header {
		display: flex;
		line-height: 4.2rem;
		margin: 6rem 0;
	}

	.sign-in__wrapper {
		width: 100%;
	}

	.sign-in__social-login-marker {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.2rem;
		width: 100%;
		font-size: 1.2rem;
		line-height: 1.4rem;
		letter-spacing: 0.0024rem;
	}

	.sign-in__subtitle {
		width: 100%;
		text-align: center;
	}

	.sign-in__horizon {
		all: unset;
		display: flex;
		width: 100%;
		height: 0.15rem;
		background: #d9d9d9;
	}

	.sign-in_tos {
		display: flex;
		margin-top: 2.4rem;
	}

	.sign-in_tos-marker {
		color: var(--Form-border-error, #f85858);
	}

	small {
		/* Text/t4 */
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.2rem;
		letter-spacing: 0.002rem;
	}
`;

const SignInPageButton = styled(Account.AccountButton)``;

const S = { SignInPageLayout, SignInPageButton };

export default S;
