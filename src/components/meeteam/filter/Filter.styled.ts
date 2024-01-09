import styled from 'styled-components';

interface IFilter {
	$checked: boolean;
}

const Filter = styled.div`
	display: flex;
	margin-top: 4.65rem;
	.container-filter_area {
		display: flex;
		margin-right: 2.6rem;
		.area {
			display: flex;
			width: 8.5rem;
			height: 3.5rem;
			padding: 0.75rem;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			flex-shrink: 0;
			border-radius: 7.5rem;
			background-color: #fcefaa;
			color: #000;
			font-family: Apple SD Gothic Neo;
			font-size: 1.5rem;
			font-style: normal;
			font-weight: 400;
			line-height: 2.1rem; /* 100% */
			letter-spacing: 0.015rem;
			cursor: pointer;
		}

		.no {
			background-color: #fff;
		}
	}
	.container-filter_menu {
		display: flex;
		gap: 1.5rem;
	}
	.sep {
		width: 0.3rem;
		height: 3.225rem;
		flex-shrink: 0;
		background-color: #d9d9d9;
	}
`;

const S = { Filter };

export default S;
