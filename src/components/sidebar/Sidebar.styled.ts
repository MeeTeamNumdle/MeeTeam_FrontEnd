import styled from 'styled-components';

const Sidebar = styled.div`
	background-color: #f7faff;
	height: 100vh;
	margin-right: 7.5rem;
	.sidebar-container {
		width: 23rem;

		.sidebar-container_title {
			margin-top: 7.05rem;
			margin-left: 3.07rem;

			h1 {
				color: #373f41;
				font-family: Apple SD Gothic Neo;
				font-size: 2.1rem;
				font-style: normal;
				font-weight: 400;
				line-height: 4.2rem; /* 200% */
				letter-spacing: 0.015rem;
			}
		}

		.sidebar-container_list {
			display: flex;
			flex-direction: column;
			gap: 1.8rem;
			margin-top: 4.12rem;
			margin-left: 3.07rem;

			.normal {
				color: #7c7c7c;
				font-family: Apple SD Gothic Neo;
				font-size: 1.5rem;
				font-style: normal;
				font-weight: 400;
				line-height: 120%; /* 1.8rem */
				letter-spacing: 0.015rem;
				text-decoration: none;
			}

			.active {
				color: #373f41;
				font-family: Apple SD Gothic Neo;
				font-size: 1.5rem;
				font-style: normal;
				font-weight: 400;
				line-height: 120%; /* 1.8rem */
				letter-spacing: 0.015rem;
				text-decoration: none;
			}
		}
	}
`;

const S = { Sidebar };

export default S;
