import React, { useEffect, useState, useRef } from 'react';
import S from './Header.styled';
import { BiSearch, BiBell, BiUser } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const alarmRef = useRef<HTMLDivElement | null>(null);
	const [openDrop, setOpenDrop] = useState<boolean>(false);
	const [openDropAlarm, setOpenDropAlarm] = useState<boolean>(false);
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
	const goMember = () => {
		navigate('/member');
	};
	const goInformationUse = () => {
		navigate('/information');
	};

	useEffect(() => {
		if (location.pathname == '/recruit') {
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
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='174'
						height='22'
						viewBox='0 0 174 22'
						fill='none'
					>
						<path
							d='M22.8208 20.9996H17.7508V10.7696L13.2208 17.7596V17.7896H10.4008V17.7596L5.84078 10.7096L5.87078 20.9996H0.800781V0.599609H4.55078L11.8108 11.4896L19.0408 0.599609H22.8208V20.9996Z'
							fill='black'
						/>
						<path
							d='M40.7763 13.4096C40.7763 13.9496 40.7762 14.5196 40.6862 15.0596L40.7163 15.1496H30.3363C30.7262 16.4696 31.7463 17.4896 33.6063 17.4896C34.6263 17.4896 35.4063 17.0996 35.8263 16.4396H40.6263C39.9363 19.4396 37.1462 21.3296 33.5462 21.3296C28.7762 21.3296 25.5963 18.1496 25.5963 13.7096C25.5963 9.29961 28.6863 6.11961 33.3363 6.11961C37.5662 6.11961 40.7763 9.02961 40.7763 13.4096ZM33.3363 9.86961C31.6863 9.86961 30.6363 10.8296 30.2763 12.2996H36.2163C35.9463 10.7096 34.8963 9.86961 33.3363 9.86961Z'
							fill='black'
						/>
						<path
							d='M57.9735 13.4096C57.9735 13.9496 57.9735 14.5196 57.8835 15.0596L57.9135 15.1496H47.5335C47.9235 16.4696 48.9435 17.4896 50.8035 17.4896C51.8235 17.4896 52.6035 17.0996 53.0235 16.4396H57.8235C57.1335 19.4396 54.3435 21.3296 50.7435 21.3296C45.9735 21.3296 42.7935 18.1496 42.7935 13.7096C42.7935 9.29961 45.8835 6.11961 50.5335 6.11961C54.7635 6.11961 57.9735 9.02961 57.9735 13.4096ZM50.5335 9.86961C48.8835 9.86961 47.8335 10.8296 47.4735 12.2996H53.4135C53.1435 10.7096 52.0935 9.86961 50.5335 9.86961Z'
							fill='black'
						/>
						<path
							d='M68.0481 5.12961V20.9996H62.9781V5.12961H56.4681V0.599609H74.5281V5.12961H68.0481Z'
							fill='black'
						/>
						<path
							d='M109.796 5.12961V20.9996H104.726V5.12961H98.2162V0.599609H116.276V5.12961H109.796Z'
							fill='black'
						/>
						<path
							d='M129.927 13.4096C129.927 13.9496 129.927 14.5196 129.837 15.0596L129.867 15.1496H119.487C119.877 16.4696 120.897 17.4896 122.757 17.4896C123.777 17.4896 124.557 17.0996 124.977 16.4396H129.777C129.087 19.4396 126.297 21.3296 122.697 21.3296C117.927 21.3296 114.747 18.1496 114.747 13.7096C114.747 9.29961 117.837 6.11961 122.487 6.11961C126.717 6.11961 129.927 9.02961 129.927 13.4096ZM122.487 9.86961C120.837 9.86961 119.787 10.8296 119.427 12.2996H125.367C125.097 10.7096 124.047 9.86961 122.487 9.86961Z'
							fill='black'
						/>
						<path
							d='M148.024 20.9996H143.164V20.1896C142.084 20.8796 140.764 21.2996 139.174 21.2996C135.244 21.2996 131.944 18.0296 131.944 13.7096C131.944 9.35961 135.244 6.11961 139.174 6.11961C140.764 6.11961 142.084 6.53961 143.164 7.22961V6.44961H148.024V20.9996ZM140.134 17.3096C141.214 17.3096 142.264 17.0096 143.164 15.9596V11.4596C142.264 10.4096 141.214 10.0796 140.134 10.0796C138.154 10.0796 136.714 11.6996 136.714 13.7096C136.714 15.7196 138.154 17.3096 140.134 17.3096Z'
							fill='black'
						/>
						<path
							d='M173.495 20.9996H168.425V10.7696L163.895 17.7596V17.7896H161.075V17.7596L156.515 10.7096L156.545 20.9996H151.475V0.599609H155.225L162.485 11.4896L169.715 0.599609H173.495V20.9996Z'
							fill='black'
						/>
					</svg>
				</div>
				<div className='header__navigation'>
					<div
						className={`header__navigation--navi-text ${isHere.recruit ? 'here' : ''}`}
						onClick={goRecruit}
					>
						구인 밋팀
					</div>
					<div
						className={`header__navigation--navi-text ${isHere.galary ? 'here' : ''}`}
						onClick={goGalary}
					>
						밋팀 갤러리
					</div>
					<div
						className={`header__navigation--navi-text ${isHere.member ? 'here' : ''}`}
						onClick={goMember}
					>
						멤버
					</div>
					<div
						className={`header__navigation--navi-text ${isHere.inform ? 'here' : ''}`}
						onClick={goInformationUse}
					>
						이용안내
					</div>
				</div>
				<div className='header__menu'>
					<div className='header__menu--search'>
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
					<div className='header__menu--create' onClick={() => navigate('/create')}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='26'
							height='26'
							viewBox='0 0 30 30'
							fill='none'
						>
							<path
								d='M22.5 12.4999L17.5 7.49989M3.125 26.8749L7.35546 26.4048C7.87232 26.3474 8.13075 26.3187 8.37231 26.2405C8.58661 26.1711 8.79056 26.0731 8.97861 25.9491C9.19057 25.8093 9.37443 25.6255 9.74216 25.2577L26.25 8.74989C27.6307 7.36918 27.6307 5.1306 26.25 3.74989C24.8693 2.36918 22.6307 2.36918 21.25 3.74989L4.74216 20.2577C4.37443 20.6255 4.19057 20.8093 4.0508 21.0213C3.92679 21.2093 3.82877 21.4133 3.75939 21.6276C3.68119 21.8691 3.65248 22.1276 3.59505 22.6444L3.125 26.8749Z'
								stroke='black'
								stroke-width='2.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</div>
					<div className='header__menu--my' ref={dropdownRef}>
						<div className='icon' onClick={() => setOpenDrop(prev => !prev)}>
							<BiUser />
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
		</S.Header>
	);
};

export default Header;
