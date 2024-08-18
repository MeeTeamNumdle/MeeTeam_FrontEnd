import styled from 'styled-components';

const SearchBar = styled.article`
	display: inline-flex;
	justify-content: flex-start;
	padding: 1.2rem 1.6rem;
	box-sizing: border-box;
	align-items: center;
	width: 26rem;
	gap: 1.2rem;
	border-radius: 7.5rem;
	border: 0.75px solid #dcdcdc;
	background: #fff;
	color: #373f41;

	&:hover {
		transition: 0.2s ease-in-out;
		border: 0.75px solid #5877fc;
	}

	&:focus-within {
		border: 0.75px solid #5877fc;

		.search-icon {
			filter: invert(0%) sepia(83%) saturate(7431%) hue-rotate(54deg) brightness(77%) contrast(114%);
		}
	}

	input {
		width: 100%;
		border: none;
		outline: none;
		background-color: transparent;
		font-size: 1.4rem;
	}

	.clear-keyword {
		cursor: pointer;
		padding: 0;
		margin: 0;
		width: 2rem;
	}
`;

const S = { SearchBar };

export default S;
