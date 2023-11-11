import styled from 'styled-components';

const Header = styled.div`
	.header {
		display: flex;
		height: 90px;
		justify-content: space-between;
		align-items: center;
		flex-shrink: 0;
		background-color: #f0f0f0;
	}

	.header__logo {
		display: flex;
		width: 10.79338rem;
		height: 1.29563rem;
		justify-content: flex-end;
		align-items: center;
		flex-shrink: 0;

		margin-left: 11%;
		cursor: pointer;

		.header__logo--bridge {
			position: absolute;
			left: 14.5rem;
			top: 2.6rem;
		}
	}

	.header__navigation {
		display: flex;
		width: 40%;
		justify-content: flex-start;
		align-items: center;
		gap: 10%;

		.header__navigation--navi-text {
			color: #515565;
			font-family: Inter;
			font-size: 20px;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			cursor: pointer;
		}
	}

	.header__menu {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-right: 5%;
		width: 15%;
		gap: 7%;

		.header__menu--search {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #121212;
			font-size: 26px;
			cursor: pointer;
		}

		.header__menu--alarm {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #121212;
			font-size: 26px;
			cursor: pointer;
		}

		.header__menu--my {
			width: 26px;
			height: 26px;
			border: 2px solid #000;
			border-radius: 50%;
			font-size: 26px;
			cursor: pointer;
		}
	}
`;

const S = { Header };

export default S;
