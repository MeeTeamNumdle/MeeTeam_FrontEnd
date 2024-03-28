import React, { useEffect, useState, useRef } from 'react';
import S from './Header.styled';
import { BiSearch, BiBell, BiUser } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';
import { preUrlState } from '../../atom';
import { useSetRecoilState } from 'recoil';
import { searchPageState } from '../../atom';
import { useRecoilState } from 'recoil';
import { CancelBtn, Logo, SearchIcon, XBtn, LogoName } from '../../assets';

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const alarmRef = useRef<HTMLDivElement | null>(null);
	const [openDrop, setOpenDrop] = useState<boolean>(false);
	const [openDropAlarm, setOpenDropAlarm] = useState<boolean>(false);
	const [openSearch, setOpenSearch] = useRecoilState(searchPageState);
	const [newAlarm, setNewAlarm] = useState<boolean>(true);
	const [isHere, setIsHere] = useState({
		recruit: false,
		galary: false,
		member: false,
		inform: false,
	});

	const goHome = () => {
		navigate('/');
	};
	const goRecruit = () => {
		navigate('/recruit');
	};
	const goGalary = () => {
		navigate('/galary');
	};
	const goInformationUse = () => {
		navigate('/information');
	};

	const onClickSearch = () => {
		setOpenSearch(true);
	};

	const onClickCancel = () => {
		setOpenSearch(false);
	};

	const setPreUrl = useSetRecoilState(preUrlState);

	useEffect(() => {
		if (location.pathname === '/recruit/:recruitId?' || location.pathname === '/recruit') {
			setIsHere({ recruit: true, galary: false, member: false, inform: false });
		}
		if (location.pathname === '/galary') {
			setIsHere({ recruit: false, galary: true, member: false, inform: false });
		}
		if (location.pathname === '/member') {
			setIsHere({ recruit: false, galary: false, member: true, inform: false });
		}
		if (location.pathname === '/information') {
			setIsHere({ recruit: false, galary: false, member: false, inform: true });
		}
		setPreUrl(location.pathname);
	}, [location]);

	useEffect(() => {
		const outsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (openDrop && dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
				setOpenDrop(false);
			}
			if (openDropAlarm && alarmRef.current && !alarmRef.current.contains(target as Node)) {
				setOpenDropAlarm(false);
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [openDrop, openDropAlarm]);

	return (
		<S.Header>
			<div className='header'>
				<div className='header__logo' onClick={goHome}>
					<img src={Logo} />
					<img src={LogoName} />
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
					<div
						className={`header__navigation--navi-text ${isHere.inform ? 'here' : ''}`}
						onClick={goInformationUse}
					>
						이용안내
					</div>
				</div>
				<div className='header__menu'>
					<div className='header__menu--search' onClick={onClickSearch}>
						<BiSearch />
					</div>
					<div className='header__menu--alarm' ref={alarmRef}>
						<div
							className='icon'
							onClick={() => {
								setOpenDropAlarm(prev => !prev);
								setNewAlarm(false);
							}}
						>
							<BiBell />
						</div>
						{newAlarm && <div className='dot'></div>}
						{openDropAlarm && (
							<div className='alarm-dropdown'>
								<div className='message apply'>
									<span>
										팀 신청이 도착했어요.
										<div className='dot2'></div>
									</span>
									<span>{'>'}</span>
								</div>
								<hr />
								<div className='message issue'>
									<span>1일 전</span>
									<span>00님이 민지님을 팔로우 하기 시작했습니다.</span>
								</div>
							</div>
						)}
					</div>
					<div className='header__menu--my' ref={dropdownRef}>
						<div className='icon' onClick={() => setOpenDrop(prev => !prev)}>
							<div>
								<BiUser />
							</div>
						</div>
						{openDrop && (
							<div className='dropdown'>
								<div
									className='menu'
									onClick={() => {
										setOpenDrop(false);
										navigate('/profile');
									}}
								>
									프로필 설정
								</div>
								<div
									className='menu'
									onClick={() => {
										setOpenDrop(false);
										navigate('/activity/invited');
									}}
								>
									내 활동
								</div>
								<div
									className='menu'
									onClick={() => {
										setOpenDrop(false);
										navigate('/manage/meeteam');
									}}
								>
									밋팀 관리
								</div>
								<div
									className='menu'
									onClick={() => {
										setOpenDrop(false);
										navigate('/account');
									}}
								>
									계정 관리
								</div>
								<div className='menu'>로그아웃</div>
							</div>
						)}
					</div>
				</div>
			</div>
			{openSearch && (
				<div className='search-box'>
					<div className='search-box__container'>
						<div className='search-box__bar'>
							<div>
								<img src={SearchIcon} />
							</div>
							<div className='container-input'>
								<input />
							</div>
						</div>
						<div className='search-box__recent'>
							<span className='subtitle'>최근 검색어</span>
							<div className='container-elements__recent'>
								<div className='element word_recent'>
									<span>프로젝트</span>
									<img src={XBtn} />
								</div>
								<div className='element word_recent'>
									<span>프로젝트</span>
									<img src={XBtn} />
								</div>
								<div className='element word_recent'>
									<span>프로젝트</span>
									<img src={XBtn} />
								</div>
								<div className='element word_recent'>
									<span>프로젝트</span>
									<img src={XBtn} />
								</div>
							</div>
						</div>
						<div className='search-box__popular'>
							<span className='subtitle'>인기 검색어</span>
							<div className='container-keys__popular'>
								<span className='keyword'>1. {'프로젝트'}</span>
								<span className='keyword'>2. {'응용소프트웨어실습'}</span>
								<span className='keyword'>3. {'오픈소스소프트웨어'}</span>
							</div>
						</div>
					</div>
					<div className='btn-cancel'>
						<img src={CancelBtn} onClick={onClickCancel} />
					</div>
				</div>
			)}
		</S.Header>
	);
};

export default Header;
