import React from 'react';
import S from './Status.styled';

interface IStatus {
	status: string;
	$check?: boolean;
	onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Status = ({ status, $check, onClick }: IStatus) => {
	return (
		<S.Status $check={$check} onClick={onClick}>
			{status}
		</S.Status>
	);
};

export default Status;
