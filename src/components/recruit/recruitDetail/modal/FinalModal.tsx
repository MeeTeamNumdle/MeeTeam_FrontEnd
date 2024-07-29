import React from 'react';
import S from './ApplyModal.styled';
import { useSetRecoilState } from 'recoil';
import { goProfileState } from '../../../../atom';

const FinalModal = () => {
	const setGoProfile = useSetRecoilState(goProfileState);

	const goProfileHandler = () => {
		setGoProfile(true);
	};

	return (
		<S.FinalModal>
			<article className='container-final'>
				<h1>신청 정보</h1>
				<section className='description'>
					<h4>신청을 완료했습니다!</h4>
					<span className='body2-medium darker'>신청 결과는 추후 메일을 통해 알려드립니다.</span>
					<span className='body2-medium darker'>
						학점 및 기타 정보를 입력하시면 승인률이 올라갑니다.
					</span>
					<span className='body2-medium darker'>
						프로필 편집을 통해 신청 정보를 수정하시겠습니까?
					</span>
				</section>
				<section className='container-button'>
					<button type='submit' className='cancel btn-txt-big'>
						나중에 하기
					</button>
					<button type='submit' className='btn-profile btn-txt-big' onClick={goProfileHandler}>
						프로필로 가기
					</button>
				</section>
			</article>
		</S.FinalModal>
	);
};

export default FinalModal;
