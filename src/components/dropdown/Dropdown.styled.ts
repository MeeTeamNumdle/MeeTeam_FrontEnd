import styled from 'styled-components';

// allowNeed 매개변수로 받아서 false면 백그라운드 투명하게 하기
interface IDropdown {
	allowNeed?: boolean;
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
		font-family: Apple SD Gothic Neo;
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.1rem; /* 233.333% */
		letter-spacing: 0.015rem;
		cursor: pointer;
		width: 11rem;
		border-radius: 0.6rem;
		border: 0.75px solid var(--sub-color, #e0e6ff);
		padding: 1.2rem 1.1rem 1.2rem 0;

		.temp {
			display: flex;
			justify-content: space-between;
			gap: 1.1rem;
			cursor: pointer;
			color: ${props => (props.allowNeed ? '#373f41' : 'transparent')};
			font-size: ${props => (!props.allowNeed ? '5rem' : '1.6rem')};
		}

		.dropdown {
			position: absolute;
			top: ${props => (!props.allowNeed ? '4rem' : '5rem')};
			width: 100%;
			right: 0rem;
			background-color: #f7f7f7;
			border-radius: 0.75rem;
			padding: 1rem 1rem;
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