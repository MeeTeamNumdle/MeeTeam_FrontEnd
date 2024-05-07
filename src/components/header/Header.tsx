import React, { useEffect, useState, useRef } from 'react';
import S from './Header.styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DropdownArrow, Logo, LogoName } from '../../assets';
import { ProfileImage, WaitModal } from '..';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { recruitFilterState, userState, waitModalState } from '../../atom';
import { useLogin, useSignOut } from '../../hooks';
import { fixModalBackground, resetFormData } from '../../utils';

const Header = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const location = useLocation();
	const { isLoggedIn } = useLogin();
	const [userInfo, setUserState] = useRecoilState(userState);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const [openDrop, setOpenDrop] = useState<boolean>(false);
	const setFilterState = useSetRecoilState(recruitFilterState);
	const [isWait, setIsWait] = useRecoilState(waitModalState);
	const [isHere, setIsHere] = useState({
		recruit: false,
		galary: false,
		inform: false,
	});

	const goRecruit = () => {
		navigate('/');
		setFilterState({
			scope: null,
			category: null,
			field: null,
			skill: [],
			role: [],
			tag: [],
			keyword: '',
			course: null,
			professor: null,
		});
	};
	const goGalary = () => {
		setIsWait(true);
	};
	const goInformationUse = () => {
		setIsWait(true);
	};

	const onClickMy = () => {
		if (!isLoggedIn) {
			navigate('/signin');
		} else {
			setOpenDrop(prev => !prev);
		}
	};

	useEffect(() => {
		if (location.pathname === `/recruitment/postings/${id}` || location.pathname === '/') {
			setIsHere({ recruit: true, galary: false, inform: false });
		}
		if (location.pathname === '/galary') {
			setIsHere({ recruit: false, galary: true, inform: false });
		} else {
			setIsHere({ recruit: false, galary: false, inform: false });
		}
	}, [location]);

	useEffect(() => {
		const outsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (openDrop && dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
				setOpenDrop(false);
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [openDrop]);

	useEffect(() => {
		fixModalBackground(isWait);
	}, [isWait]);

	// 로그아웃
	const { mutate: signOut } = useSignOut({ setUserState });

	const handleLogOutButtonClick = () => {
		const confirm = window.confirm('로그아웃 하시겠습니까?');
		if (confirm) {
			signOut();
			navigate('/');
			setOpenDrop(false);
		}
	};

	resetFormData();

	return (
		<S.Header $isLogin={isLoggedIn}>
			<div className='header'>
				<section className='header-leftside'>
					<div className='header__logo' onClick={goRecruit}>
						<img className='logo' src={Logo} />
						<img className='logo-name' src={LogoName} />
						{isLoggedIn && <span className='university'>광운대학교</span>}
					</div>
					<div className='header__navigation'>
						<div
							className={`header__navigation--navi-text ${isHere.recruit ? 'here' : ''}`}
							onClick={goRecruit}
						>
							구인게시판
						</div>
						<div
							className={`header__navigation--navi-text ${isHere.galary ? 'here' : ''}`}
							onClick={goGalary}
						>
							밋팀갤러리
						</div>
					</div>
				</section>
				<section>
					<div className='header__menu'>
						<div className='header__menu--my' ref={dropdownRef}>
							<section onClick={onClickMy}>
								{isLoggedIn ? (
									<article className='icon-container'>
										<div className='icon-border'>
											<ProfileImage url={userInfo?.imageUrl} size='3rem' />
										</div>
										<img src={DropdownArrow} />
									</article>
								) : (
									<span className='login'>로그인</span>
								)}
							</section>
							{openDrop && (
								<div className='dropdown'>
									<div
										className='menu'
										onClick={() => {
											setOpenDrop(false);
											navigate(`/profile/${userInfo?.userId}`);
										}}
									>
										프로필
									</div>
									<div
										className='menu'
										onClick={() => {
											setOpenDrop(false);
											navigate('/portfolio/management');
										}}
									>
										포트폴리오
									</div>
									<div
										className='menu'
										onClick={() => {
											setOpenDrop(false);
											navigate('/management/bookmark');
										}}
									>
										구인글 관리
										<hr />
									</div>
									<div className='menu logout' onClick={handleLogOutButtonClick}>
										로그아웃
									</div>
								</div>
							)}
						</div>
					</div>
				</section>
			</div>
			{isWait && (
				<section className='modal-background'>
					<WaitModal />
				</section>
			)}
		</S.Header>
	);
};

export default Header;
