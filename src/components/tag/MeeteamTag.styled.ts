import styled from 'styled-components';

const MeeteamTag = styled.div`
	height: auto;
	position: relative;

	.tag__box {
		position: relative;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		min-height: 4.875rem;
		width: 100%;
		height: auto;
		padding: 0.5rem 1.3rem;
		border-radius: 0.75rem;
		border: 0.75px solid #e3e3e3;
		background-color: #fff;
		box-sizing: border-box;
		z-index: 101;

		&:focus-within {
			border-color: #00a8ff;
		}

		input {
			display: inline-flex;
			min-width: 200px;
			background: transparent;
			border: none;
			outline: none;
			cursor: text;
			padding: 0.5rem 0 0.5rem 1.3rem;
		}

		button {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 15px;
			height: 15px;
			margin-left: 5px;
			background-color: white;
			border-radius: 50%;
			color: #54a0ff;
			border: none;
		}
	}

	.tag__item {
		display: inline-flex;
		height: 3.15rem;
		padding: 0.75rem 1.125rem;
		justify-content: center;
		align-items: center;
		gap: 0.75rem;
		flex-shrink: 0;
		margin: 5px;
		border-radius: 7.5rem;
		background: #e0e6ff;
		color: #373f41;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.8rem; /* 90% */
		letter-spacing: 0.02rem;
	}

	.option {
		cursor: pointer;
	}

	.tag-dropdown {
		position: absolute;
		width: 100%;
		height: 15.525rem;
		border-radius: 0.75rem;
		border: 0.75px solid #e7e7e7;
		background: #fff;
		box-shadow: 0px 2.25px 15px 0px rgba(0, 0, 0, 0.1);
		top: 6rem;
		display: flex;
		padding-top: 2rem;
		padding-left: 2.5rem;
	}
`;

const S = { MeeteamTag };

export default S;
