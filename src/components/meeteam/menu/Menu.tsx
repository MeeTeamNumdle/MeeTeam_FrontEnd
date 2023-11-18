import React, { useEffect, useState } from 'react';
import S from './Menu.styled';

const Menu = () => {
	const menuList = ['📁 정보', '👥 멤버', '📁 작업물 등록', '⚙️ 설정', ''] as const;

	const [menu, setMenu] = useState('📁 정보');
	
	type menuType = (typeof menuList)[number];
	useEffect(() => {
		setMenu(menu);
	}, [menu]);

	const checkColorChange = (currentMenu: menuType) => currentMenu === menu;

	return (
		<S.MenuRow>
			{menuList.map((currentMenu, index) => (
				<S.MenuBox $color={checkColorChange(currentMenu)} key={index}>
					{currentMenu}
				</S.MenuBox>
			))}
		</S.MenuRow>
	);
};

export default Menu;
