import React from 'react';
import S from './ApplyModal.styled';

const FinalModal = () => {
	return (
		<S.FinalModal>
			<article className='container-final'>
				<h1>신청 정보</h1>
				<section className='description'>
					<span>지원을 완료했습니다!</span>
					<span>지원 결과는 추후 메일을 통해 알려드립니다.</span>
				</section>
				<section className='container-button'>
					<button type='submit'>확인</button>
				</section>
			</article>
		</S.FinalModal>
	);
};

export default FinalModal;
