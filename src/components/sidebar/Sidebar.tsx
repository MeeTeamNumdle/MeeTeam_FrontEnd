import React from 'react';
import { NavLink } from 'react-router-dom';
import S from './Sidebar.styled';

interface MenuItem {
	name: string;
	path: string;
}

interface MenuProps {
	menus: MenuItem[];
	title?: string;
}

const Sidebar = ({ menus, title }: MenuProps) => {
	return (
		<S.Sidebar>
			<div className='sidebar-container'>
				<div className='sidebar-container_title'>
					<h1>{title}</h1>
				</div>
				<div className='sidebar-container_list'>
					{menus.map((menu, index) => {
						return (
							<NavLink
								className={({ isActive }) => (isActive ? 'active' : 'normal')}
								to={menu.path}
								key={index}
							>
								<span>{menu.name}</span>
							</NavLink>
						);
					})}
				</div>
			</div>
		</S.Sidebar>
	);
};

export default Sidebar;
