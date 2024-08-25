import React from 'react';
import S from './FinalValidationModal.styled';

interface FinalValidationModalProps {
	basicAvailable: boolean;
	validCheck: {
		isTitle: boolean;
		isDeadline: boolean;
		isScope: boolean;
		isCategory: boolean;
		isEndDate: boolean;
		isProcedure: boolean;
		isContent: boolean;
		isRole: boolean;
	};
	setBeforeSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

const FinalValidationModal = ({
	basicAvailable,
	validCheck,
	setBeforeSubmit,
}: FinalValidationModalProps) => {
	return (
		<S.FinalValidationModal>
			<h3>필수정보를 입력해주세요.</h3>
			<span className='body2-semibold'>
				아래 <span className='caution'>미작성된 항목</span>을 입력해 구인글 작성을 완료해주세요.
			</span>
			<section className='wrapper-list__unsatisfied'>
				{!basicAvailable && (
					<section className='container-list'>
						<section className='subtitle body2-medium'>기본정보</section>
						<section className='list-unsatisfied'>
							{!validCheck.isTitle && <span className='element body2-medium'>구인글 제목</span>}
							{!validCheck.isDeadline && (
								<span className='element body2-medium'>구인글 마감일</span>
							)}
							{!validCheck.isScope && <span className='element body2-medium'>범위</span>}
							{!validCheck.isCategory && <span className='element body2-medium'>유형</span>}
							{!validCheck.isEndDate && <span className='element body2-medium'>진행기간</span>}
							{!validCheck.isProcedure && <span className='element body2-medium'>진행방식</span>}
						</section>
					</section>
				)}
				{!validCheck.isContent && (
					<section className='container-list'>
						<section className='subtitle body2-medium'>상세내용</section>
						<section className='list-unsatisfied'>
							{!validCheck.isContent && <span className='element body2-medium'>내용 미입력</span>}
						</section>
					</section>
				)}
				{!validCheck.isRole && (
					<section className='container-list'>
						<section className='subtitle body2-medium'>모집역할</section>
						<section className='list-unsatisfied'>
							{!validCheck.isRole && <span className='element body2-medium'>내용 미입력</span>}
						</section>
					</section>
				)}
			</section>
			<button type='button' className='btn-okay txt-small' onClick={() => setBeforeSubmit(false)}>
				확인
			</button>
		</S.FinalValidationModal>
	);
};

export default FinalValidationModal;
