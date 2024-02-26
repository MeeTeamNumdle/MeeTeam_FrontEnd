import styled from 'styled-components';

// arrowNeed 매개변수로 받아서 false면 백그라운드 투명하게 하기
interface IDropdown {
	$arrowNeed?: boolean;
	$showDropdown?: boolean;
}

const Dropdown = styled.div<IDropdown>`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	.menu {
		position: relative;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		color: #373f41;
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.1rem; /* 233.333% */
		letter-spacing: 0.015rem;
		cursor: pointer;
		width: 12rem;
		border-radius: 0.6rem;
		border: 0.75px solid var(--sub-color, #e0e6ff);
		padding: 1.2rem 1.1rem;
		/* padding: 1.2rem 1.1rem 1.2rem 0rem; */

		.temp {
			display: flex;
			width: 90%;
			justify-content: space-between;
			gap: 1.1rem;
			cursor: pointer;
			color: ${props => (props.$arrowNeed ? '#8E8E8E' : '')};
			font-size: ${props => (!props.$arrowNeed ? '5rem' : '1.6rem')};
			font-weight: 700;

			span:nth-child(1) {
				font-size: 1.5rem;
			}

			span:nth-child(2) {
				font-size: 1.1rem;
				transition: transform 0.1s ease-in-out;
				transform: rotateZ(${props => (props.$showDropdown ? '180deg' : '0deg')});
			}
		}

		.dropdown {
			position: absolute;
			top: ${props => (!props.$arrowNeed ? '4rem' : '5rem')};
			width: 100%;
			right: 0rem;
			background-color: #f7f7f7;
			border-radius: 0.75rem;
			padding: 1rem 1rem;
			z-index: 500;
		}
	}

	.menu-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1.6rem;
		gap: 1.2rem;

		li {
			&:hover {
				color: #5f5cec;
				transition: 0.2s;
			}
		}
	}
`;

const S = { Dropdown };

export default S;
