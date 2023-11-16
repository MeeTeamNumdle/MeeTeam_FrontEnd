import React from 'react';
import S from './Header.styled';
import { BiSearch, BiBell, BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate('/');
	};
	const goRecruit = () => {
		navigate('/recruit');
	};
	const goGalary = () => {
		navigate('/galary');
	};
	const goMember = () => {
		navigate('/member');
	};
	const goInformationUse = () => {
		navigate('/information');
	};
	return (
		<S.Header>
			<div className='header'>
				<div className='header__logo' onClick={goHome}>
					LOGO
				</div>
				<div className='header__navigation'>
					<div className='header__navigation--navi-text' onClick={goRecruit}>
						구인 밋팀
					</div>
					<div className='header__navigation--navi-text' onClick={goGalary}>
						밋팀 갤러리
					</div>
					<div className='header__navigation--navi-text' onClick={goMember}>
						멤버
					</div>
					<div className='header__navigation--navi-text' onClick={goInformationUse}>
						이용안내
					</div>
				</div>
				<div className='header__menu'>
					<div className='header__menu--search'>
						<BiSearch />
					</div>
					<div className='header__menu--alarm'>
						<BiBell />
					</div>
					<div className='header__menu--my'>
						<BiUser />
					</div>
				</div>
			</div>
		</S.Header>
	);
};

export default Header;
