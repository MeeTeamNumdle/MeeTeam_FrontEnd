import React from 'react';
import { meeteam_banner_icon } from '../../../../assets';
import S from './MainBanner.styled';

const MainBanner = () => {
	return (
		<S.Banner>
			<section className='container-title'>
				<span className='subtitle'>팀원을 찾고 있나요?</span>
				<span className='title'>밋팀으로 팀원을 만나보세요!</span>
			</section>
			<section>
				<img src={meeteam_banner_icon} fetchpriority='high' />
			</section>
		</S.Banner>
	);
};

export default MainBanner;
