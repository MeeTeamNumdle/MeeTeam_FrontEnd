import React from 'react';
import S from './ApplySubmit.styled';
import { useRecoilState } from 'recoil';
import { applyStepState } from '../../../../atom';

const ApplySubmit = () => {
	const [step, setStep] = useRecoilState(applyStepState);
	const onClickStep = () => {
		setStep(prev => prev - 1);
	};
	return (
		<S.ApplySubmit>
			<div className='container-apply__form'>
				<span className='container-apply__form-title'>신청 정보</span>
				<div className='container-apply__form-short_info'>
					<div className='info'>
						<span className='info-subtitle'>이름</span>
						<span className='info-value'>{'송유진'}</span>
					</div>
					<div className='info'>
						<span className='info-subtitle'>등급</span>
						<span className='info-value'>{'A0'}</span>
					</div>
					<div className='info'>
						<span className='info-subtitle'>학교</span>
						<span className='info-value'>{'광운대학교'}</span>
					</div>
					<div className='info'>
						<span className='info-subtitle'>학번</span>
						<span className='info-value'>{'18'}</span>
					</div>
				</div>
				<div className='container-apply__form-long_info'>
					<div className='info'>
						<span className='info-subtitle'>학과</span>
						<span className='info-value'>{'소프트웨어학부'}</span>
					</div>
					<div className='info email'>
						<span className='info-subtitle'>이메일</span>
						<span className='info-value'>{'jiminni_01@kw.ac.kr'}</span>
					</div>
				</div>
				<div className='container-apply__form-warn'>
					<span>멤버들에게 위 정보가 공개됩니다.</span>
					<span>멤버들이 본인의 프로필을 열람할 수 있습니다.</span>
				</div>
				<div className='container-apply__form-buttons'>
					<button className='btn back' type='button' onClick={onClickStep}>
						뒤로가기
					</button>
					<button className='btn submit' type='submit'>
						확인
					</button>
				</div>
			</div>
		</S.ApplySubmit>
	);
};

export default ApplySubmit;
