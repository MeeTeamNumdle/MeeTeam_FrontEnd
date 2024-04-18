import React from 'react';
import S from './RecruitManagePage.styled';
import { ScrollToTop } from '../../../utils';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../../components';

const RecruitManageWrapper = () => {
	const manageMenu = [
		{
			name: '북마크한 구인글',
			path: 'bookmark',
		},
		{
			name: '신청한 구인글',
			path: 'applied',
		},
		{
			name: '내가 작성한 구인글',
			path: 'my-post',
		},
	];
	return (
		<S.RecruitManageWrapper>
			<Sidebar menus={manageMenu} title='구인글 관리' />
			<main>
				<ScrollToTop />
				<Outlet />
			</main>
		</S.RecruitManageWrapper>
	);
};

export default RecruitManageWrapper;