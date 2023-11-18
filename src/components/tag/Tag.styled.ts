import styled from 'styled-components';

const Tag = styled.div`
	padding: 10px;
	height: 100vh;

	.tag__box {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		min-height: 50px;
		margin: 10px;
		padding: 0 10px;
		border: 1px solid rgba(0, 0, 0, 0.3);
		border-radius: 10px;

		&:focus-within {
			border-color: #00a8ff;
		}

		.tag__item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 5px;
			padding: 5px;
			background-color: #54a0ff;
			border-radius: 5px;
			color: #fff;
			font-size: 13px;

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

		input {
			display: inline-flex;
			min-width: 200px;
			background: transparent;
			border: none;
			outline: none;
			cursor: text;
		}
	}
`;

const S = { Tag };

export default S;
