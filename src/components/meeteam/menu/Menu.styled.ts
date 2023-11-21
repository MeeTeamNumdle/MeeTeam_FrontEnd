import styled from 'styled-components';

const MenuRow = styled.div`
	display: flex;
	align-items: center;
	margin-left: 15.052vw;
	margin-right: 15.052vw;
`;

const MenuBox = styled.button<{ $color?: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 14.063vw;
	height: 3.646vw;
	border-radius: 0.5rem 0.5rem 0rem 0rem;
	border-top: ${props => (props.$color ? `solid #EEECFF` : `0.052vw solid #cbcbcb`)};
	border-right: ${props => (props.$color ? `solid #EEECFF` : `0.052vw solid #cbcbcb`)};
	border-left: ${props => (props.$color ? `solid #EEECFF` : `0.052vw solid #cbcbcb`)};
	border-bottom: ${props => (props.$color ? `0` : `solid #EEECFF`)};
	background: ${props => (props.$color ? '#FFF' : '#F6F6F6')};
	color: var(--light-black, ${props => (props.$color ? '#5877FC' : '#373f41')});
	font-family: Pretendard;
	font-size: 1.1rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.125rem; /* 75% */
	letter-spacing: 0.0125rem;
`;

const S = { MenuRow, MenuBox };

export default S;
