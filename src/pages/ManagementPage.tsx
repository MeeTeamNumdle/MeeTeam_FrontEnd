import React from 'react';
import { ProgressBar } from '../components';
import { Menu } from '../components';
import { Main } from '../components';

const ManagementPage = () => {
	return (
		<>
			<ProgressBar />
			<Menu />
			<Main />
		</>
	);
};

export default ManagementPage;
