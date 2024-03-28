import React, { useState } from 'react';
import S from './ApplyInfomation.styled';
import { useRecoilState } from 'recoil';
import { applyStepState } from '../../../../atom';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';

const ApplyInfomation = () => {
	const [step, setStep] = useRecoilState(applyStepState);
	const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
	const onClickStep = () => {
		setStep(prev => prev + 1);
	};
	const onClickBookmark = () => {
		setIsBookmarked(prev => !prev);
	};
	return (
		<S.ApplyInformation>
			<div className='container-apply__member'>
				<div>
					<span className='type'>리더</span>
					<div className='leader-info'>
						<div className='leader-info__icon'>
							<img src='https://i.pinimg.com/236x/90/c7/f7/90c7f7afa68ea9b875eafbe887f454e8.jpg' />
						</div>
						<div className='leader-info__user'>
							<span>김민지</span>
							<span>
								<span className='user-info'>응답률: 90%</span>
								<span className='user-info'>평점: 4.8</span>
							</span>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className='container-apply__deadline'>
				<span>🚨 마감일</span>
				<span>{'23.10.16(1일 남음)'}</span>
			</div>
			<div className='container-apply__buttons'>
				<button type='button' onClick={onClickBookmark}>
					{isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
					<span>북마크하기</span>
				</button>
				<button type='button' onClick={onClickStep}>
					신청하기
				</button>
			</div>
		</S.ApplyInformation>
	);
};

export default React.memo(ApplyInfomation);
