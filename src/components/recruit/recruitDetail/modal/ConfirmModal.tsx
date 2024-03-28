import React from 'react';
import S from './ApplyModal.styled';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { applyStepState, applyUserInfo } from '../../../../atom';
import { useMutation } from '@tanstack/react-query';
import { applyRole } from '../../../../service';
import { ApplyForm } from '../../../../types';

const PAGE_NUMBER = 2;

interface ApplyArgs {
	PAGE_NUMBER: number;
	formApply: ApplyForm;
}

const ConfirmModal = () => {
	const setApplyStepState = useSetRecoilState(applyStepState);
	const userInfo = useRecoilValue(applyUserInfo);
	const formApply = {
		applyRoleId: userInfo.role.applyRoleId,
		message: userInfo.message,
	};

	const apply = useMutation({
		mutationFn: ({ PAGE_NUMBER, formApply }: ApplyArgs) => applyRole(PAGE_NUMBER, formApply),
		onSuccess: () => {
			setApplyStepState(prev => prev + 1);
		},
	});

	const onClickBack = () => {
		setApplyStepState(prev => prev - 1);
	};
	const onClickNext = () => {
		apply.mutate({ PAGE_NUMBER, formApply });
	};

	return (
		<S.Modal>
			<article>
				<h1>신청 정보</h1>
				<section className='description'>
					<h4>멤버들에게 다음과 같이 공개됩니다.</h4>
					<span className='description-confirm'>
						멤버들이 지원자의 프로필을 열람할 수 있습니다.
					</span>
					<span className='description-confirm'>
						신청자 정보는 프로필 편집을 통해 수정할 수 있습니다.
					</span>
				</section>
			</article>
			<article className='container-user__info'>
				<h4>지원자 정보</h4>
				<section className='user-info'>
					<section className='user-info__section'>
						<section>
							<span>이름</span>
							<span>학교</span>
							<span>학과</span>
							<span>이메일</span>
						</section>
						<section>
							<span className='value'>{userInfo.name}</span>
							<span className='value'>{userInfo.universityName}</span>
							<span className='value'>{userInfo.departmentName}</span>
							<span className='value'>{userInfo.email}</span>
						</section>
					</section>
					<section className='user-info__section'>
						<section>
							<span>학점</span>
							<span>입학년도</span>
						</section>
						<section>
							<span className='value'>{userInfo.score}</span>
							<span className='value'>{userInfo.year}</span>
						</section>
					</section>
				</section>
				<hr />
				<section className='role-info'>
					<h4>{userInfo.role.name}</h4>
					<p>{userInfo.message}</p>
				</section>
			</article>
			<article className='container-buttons confirm-btn'>
				<button type='button' className='cancel' onClick={onClickBack}>
					뒤로가기
				</button>
				<button type='button' className='confirm' onClick={onClickNext}>
					제출하기
				</button>
			</article>
		</S.Modal>
	);
};

export default ConfirmModal;
