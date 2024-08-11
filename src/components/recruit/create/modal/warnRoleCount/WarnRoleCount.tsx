import React from 'react';
import S from './WarnRoleCount.styled';
import { useSetRecoilState } from 'recoil';
import { warningModalRoleCountState } from '../../../../../atom';

const WarnRoleCount = () => {
	const setWarnRoleCountState = useSetRecoilState(warningModalRoleCountState);
	const onClickConfirm = () => {
		setWarnRoleCountState(false);
	};
	return (
		<S.WarnRoleCount>
			<h3>역할을 삭제할 수 없어요!</h3>
			<section className='description'>
				<span className='body2-medium'>역할은 최대 10개까지 입력 가능합니다.</span>
				<span className='body2-medium'>기존에 입력한 역할을 삭제하거나</span>
				<span className='body2-medium'>새로운 구인글을 작성해주세요.</span>
			</section>
			<section className='btn-container'>
				<button className='confirm btn-txt' onClick={onClickConfirm}>
					확인
				</button>
			</section>
		</S.WarnRoleCount>
	);
};

export default WarnRoleCount;
