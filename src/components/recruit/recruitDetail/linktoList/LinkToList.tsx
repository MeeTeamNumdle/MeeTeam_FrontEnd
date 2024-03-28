import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from './LinkToList.styled';

const LinkToList = () => {
	const navigate = useNavigate();

	return (
		<S.LinkToList>
			<button
				type='button'
				onClick={() => {
					navigate('/recruit');
				}}
			>
				목록보기
			</button>
		</S.LinkToList>
	);
};

export default LinkToList;
