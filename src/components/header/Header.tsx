import React, { useEffect, useState, useRef } from 'react';
import S from './Header.styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DropdownArrow } from '../../assets';
import { ProfileImage, WaitModal } from '..';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { recruitFilterState, userState, waitModalState, loginState } from '../../atom';
import {
	useSignOut,
	useLogin,
	useReadProfileImage,
	useOutsideClick,
	useFixModalBackground,
} from '../../hooks';

const Header = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const location = useLocation();
	const { isLogin } = useLogin();
	const setLoginState = useSetRecoilState(loginState);
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
	const { mutate: signOut } = useSignOut({ setUserState, setLoginState });
	const { data: profileImage } = useReadProfileImage(isLogin);

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

	const onClickMy = () => {
		if (!isLogin) {
			navigate('/signin');
		} else {
			setOpenDrop(prev => !prev);
		}
	};

	const handleLogOutButtonClick = () => {
		signOut();
		navigate('/');
		setOpenDrop(false);
	};

	useOutsideClick(dropdownRef, openDrop, setOpenDrop);
	useFixModalBackground(isWait);

	useEffect(() => {
		if (location.pathname === `/recruitment/postings/${id}` || location.pathname === '/') {
			setIsHere({ recruit: true, galary: false, inform: false });
		} else {
			setIsHere({ recruit: false, galary: false, inform: false });
		}
	}, [location.pathname, id]);

	return (
		<S.Header $isLogin={isLogin}>
			<div className='header'>
				<section className='header-leftside'>
					<div className='header__logo' onClick={goRecruit}>
						<img
							className='logo'
							src='logo_typo_large.webp'
							srcSet='logo_typo_small.webp 600w,  logo_typo_medium.webp 900w, logo_typo_large.webp 1280w'
							// eslint-disable-next-line react/no-unknown-property
							fetchpriority='high'
							alt='logo_typo'
						/>
						{isLogin && <span className='university'>{userInfo?.university}</span>}
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
								{isLogin ? (
									<article className='icon-container'>
										<div className='icon-border'>
											<ProfileImage url={profileImage?.imageUrl} size='3rem' />
										</div>
										<img src={DropdownArrow} alt='드롭다운 아이콘' />
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
											navigate('/account');
										}}
									>
										계정 설정
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
