import styled from 'styled-components';

interface IManageRecruitPage {
	isOn?: boolean;
}

const ManageRecruitPage = styled.div<IManageRecruitPage>`
	margin-top: 13.2rem;

	.container {
		display: flex;
		flex-direction: column;
		gap: 1.8rem;

		.container-recruits {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 80.55rem;
			height: 9rem;
			flex-shrink: 0;
			border-radius: 0.75rem;
			border: 1.125px solid var(--main-2, #5f5cec);
			background: #f9f9f9;
			padding: 0 1.8rem;
			box-sizing: border-box;
		}

		.container-recruits_info {
			display: flex;
			flex-direction: column;

			.container-tags {
				display: flex;
				gap: 0.68rem;
			}

			.container-title {
				color: #000;
				text-align: center;
				font-family: Apple SD Gothic Neo;
				font-size: 1.8rem;
				font-style: normal;
				font-weight: 400;
				line-height: 4.2rem; /* 233.333% */
				letter-spacing: 0.015rem;
			}
		}

		.container-recruits_options {
			display: flex;
			gap: 5.48rem;
			margin-right: 3.45rem;
		}
		.toggle {
			position: relative;
		}
		.toggle-container {
			width: 50px;
			height: 24px;
			border-radius: 30px;
			/* background-color: rgb(255, 255, 255); */
			border: 1px solid #d9d9d9;
		}
		.toggle-checked {
			background-color: ${props => (props.isOn ? 'rgba(95, 92, 236, 0.76)' : 'rgb(255, 255, 255)')};
			transition: 0.3s;
		}
		.toggle-circle {
			position: absolute;
			top: 1px;
			left: 1px;
			width: 22px;
			height: 22px;
			border-radius: 50%;
			background-color: ${props => (props.isOn ? 'rgb(255, 255, 255)' : 'rgb(95, 92, 236)')};
			transition: 0.5s;
		}
		.toggle-checked {
			left: 27px;
			transition: 0.3s;
		}
	}
`;

const S = { ManageRecruitPage };

export default S;
