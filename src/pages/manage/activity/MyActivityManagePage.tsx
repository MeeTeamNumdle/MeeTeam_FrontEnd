import React from 'react';
import { Tag, Card } from '../../../components';
import S from './MyActivityManagePage.styled';

const MyActivityManagePage = () => {
	return (
		<S.MyActivityManagePage>
			<div className='container-contents'>
				<div className='container-contents__row'>
					<div className='subtitle'>👀 제의받은 밋팀</div>
					<div className='contents'>
						<div className='content'>
							<Card />
							<div className='title'>
								[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
							</div>
						</div>
						<div className='content'>
							<Card />
							<div className='title'>
								[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
							</div>
						</div>
						<div className='content'>
							<Card />
							<div className='title'>
								[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
							</div>
						</div>
					</div>
				</div>
				<div className='container-contents__row'>
					<div className='subtitle'>❤️ 좋아요한 밋팀</div>
					<div className='contents'>
						<div className='content'>
							<Card />
							<div className='title'>
								[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
							</div>
						</div>
						<div className='content'>
							<Card />
							<div className='title'>
								[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
							</div>
						</div>
						<div className='content'>
							<Card />
							<div className='title'>
								[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
							</div>
						</div>
					</div>
				</div>
			</div>
		</S.MyActivityManagePage>
	);
};

export default MyActivityManagePage;
