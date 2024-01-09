import { NavLink } from 'react-router-dom';
import S from './Sidebar.styled';

const Sidebar = () => {
	const menus = [
		{ name: '전체 밋팀 관리', path: 'meeteam' },
		{ name: '구인 글 관리', path: 'recruit' },
		{ name: '포트폴리오 관리', path: 'portpolio' },
	];
	return (
		<S.Sidebar>
			<div className='sidebar-container'>
				<div className='sidebar-container_title'>
					<h1>밋팀 관리</h1>
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
