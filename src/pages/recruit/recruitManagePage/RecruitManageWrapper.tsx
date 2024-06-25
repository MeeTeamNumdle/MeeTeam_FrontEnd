import React, { useState } from 'react';
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
	const [isMobile, setIsMobile] = useState(window.innerWidth < 450);
	return (
		<S.RecruitManageWrapper>
			{isMobile ? (
				<div className='mobile-bg'>PC 환경으로 이용해주시면 감사하겠습니다.</div>
			) : (
				<>
					<Sidebar menus={manageMenu} title='구인글 관리' />
					<main>
						<ScrollToTop />
						<Outlet />
					</main>
				</>
			)}
		</S.RecruitManageWrapper>
	);
};

export default RecruitManageWrapper;
