import React from 'react';
import { Profile, Create, Portfolio, CancelWhite, PlusWhite } from '../../../../assets';
import S from './FloatingButton.styled';

interface FloatingButton {
	isFloatingOpen: boolean;
	onClick: () => void;
	recruitCreateHandler: () => void;
	profileCreateHandler: () => void;
	portfolioCreateHandler: () => void;
}

const FloatingButton = ({
	isFloatingOpen,
	onClick,
	recruitCreateHandler,
	profileCreateHandler,
	portfolioCreateHandler,
}: FloatingButton) => {
	return (
		<S.FloatingButton onClick={onClick}>
			{isFloatingOpen && (
				<section className='floating-menu'>
					<article className='container-menu'>
						<span className='nav-info'>내 프로필 작성</span>
						<section className='menu floating' onClick={profileCreateHandler}>
							<img src={Profile} alt='프로필 아이콘' />
						</section>
					</article>
					<article className='container-menu'>
						<span className='nav-info'>구인글 작성</span>
						<section className='menu floating' onClick={recruitCreateHandler}>
							<img src={Create} alt='생성 아이콘' />
						</section>
					</article>
					<article className='container-menu'>
						<span className='nav-info'>포트폴리오 등록</span>
						<section className='menu floating' onClick={portfolioCreateHandler}>
							<img src={Portfolio} alt='포트폴리오 아이콘' />
						</section>
					</article>
				</section>
			)}
			<section className={`container-btn floating  ${isFloatingOpen && 'cancel-icon'}`}>
				{isFloatingOpen ? (
					<img className='floating-icon' src={CancelWhite} alt='취소 아이콘' />
				) : (
					<img className='floating-icon add-icon' src={PlusWhite} alt='추가 아이콘' />
				)}
			</section>
		</S.FloatingButton>
	);
};

export default FloatingButton;
