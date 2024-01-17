import React, { useState, useEffect } from 'react';
import { RequiredInformation, Title, Menu, Main } from '../../components';
import { GoBack } from '../../components';
import S from './ManagementPage.styled';

const ManagementPage = () => {
	const [title, setTitle] = useState('MeeTeam');
	const [status, setStatus] = useState('진행중');
	useEffect(() => {
		setStatus(status);
	}, [status]);

	return (
		<>
			<S.ManagementPageRow>
				<GoBack />
				<Title title={title} status={status} />
			</S.ManagementPageRow>
			<RequiredInformation />
			<Menu />
			<Main />
		</>
	);
};

export default ManagementPage;