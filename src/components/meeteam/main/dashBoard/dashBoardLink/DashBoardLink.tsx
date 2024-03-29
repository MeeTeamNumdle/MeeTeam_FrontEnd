import React from 'react';
import S from './DashBoardLink.styled';
import { linkList, LINK_SHORTCUTS_BUTTON } from '../../link/LinkData';
import { useSetRecoilState } from 'recoil';
import { contentState } from '../../../../../atom';
import { STATUS_RIGHT_ARROW_ICON, MEMBER_PLUS_ICON } from '../../../..';

const DashBoardLink = () => {
	const setContent = useSetRecoilState(contentState);

	const checkRegistration = () => {
		if (linkList.find(element => element.link !== ``) === undefined) {
			return true;
		}
		return false;
	};

	return (
		<S.DashBoardLinkLayout>
			<header className='main__row'>
				<h2 className='main--big-text'>링크</h2>
				{!checkRegistration() && (
					<S.DashBoardLinkPlusButton
						className='main--small-text'
						type='button'
						onClick={() => setContent('밋팀')}
					>
						연락 수단 추가
						{MEMBER_PLUS_ICON}
					</S.DashBoardLinkPlusButton>
				)}
			</header>
			{checkRegistration() ? (
				<>
					<div className='dash-board-link__box'>
						등록된 링크가 없어요.
						<div className='dash-board-link__box--small-text'>
							멤버들과 연락할 수 있는 링크를 등록해주세요!
						</div>
					</div>
					<S.DashBoardLinkRegisterButton type='button' onClick={() => setContent('밋팀')}>
						연락 수단 등록하기
						{STATUS_RIGHT_ARROW_ICON}
					</S.DashBoardLinkRegisterButton>
				</>
			) : (
				linkList
					.filter(element => element.link !== ``)
					.map((element, index) => (
						<div className='dash-board-link__row' key={index}>
							<S.DashBoardLinkImageIcon src={element.icon} alt={element.title + ` 아이콘`} />
							<a
								className='dash-board-link__content'
								href={element.link}
								target='_blank'
								title={element.title}
								rel='noreferrer noopener'
							>
								{element.title}
							</a>
							<a
								className='dash-board-link__icon'
								href={element.link}
								target='_blank'
								title={element.title + `바로 가기`}
								rel='noreferrer noopener'
							>
								{LINK_SHORTCUTS_BUTTON}
							</a>
						</div>
					))
			)}
		</S.DashBoardLinkLayout>
	);
};

export default DashBoardLink;
