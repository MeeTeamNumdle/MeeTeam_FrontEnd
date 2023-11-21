import React, { useState } from 'react';
import { ProgressBar } from '../components';
import { Menu } from '../components';
import { Main } from '../components';

const ManagementPage = () => {
	const [content, setContent] = useState('📁 정보');
	const clickedHandler: React.MouseEventHandler<HTMLButtonElement> = e => {
		const button = e.target as HTMLButtonElement;
		if (!button.textContent) {
			throw new Error('No Content');
		}
		setContent(button.textContent);
	};

	return (
		<>
			<ProgressBar />
			<Menu menu={content} clickedHandler={clickedHandler} />
			<Main content={content} />
		</>
	);
};

export default ManagementPage;
