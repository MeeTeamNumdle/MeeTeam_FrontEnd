import React from 'react';
import { UnfilledBookmark, FilledBookmark } from '../../../../assets';
import { useSetRecoilState } from 'recoil';
import { applyModalState, applyCancelModalState, needLoginModalState } from '../../../../atom';
import { calculateDate } from '../../../../utils';
import { useParams } from 'react-router-dom';
import { useBookmark, useLogin } from '../../../../hooks';
import { useDelBookmark } from '../../../../hooks/useBookMark';

interface ApplierData {
	deadline: string;
	isApplied: boolean;
	isBookmarked: boolean;
}

const ApplierFooter = ({ deadline, isApplied, isBookmarked }: ApplierData) => {
	const { id } = useParams();
	const pageNum = Number(id);
	const { isLogin } = useLogin();
	const diffDate = calculateDate(deadline);
	const setIsModal = useSetRecoilState(applyModalState);
	const setNeedLoginModal = useSetRecoilState(needLoginModalState);
	const { mutate: bookmarked } = useBookmark({ queryKey: 'detailedPage' });
	const { mutate: unBookmarked } = useDelBookmark({ queryKey: 'detailedPage' });

	const setIsCancel = useSetRecoilState(applyCancelModalState);

	const onClickApply = () => {
		if (isLogin) {
			setIsModal(true);
		} else {
			setNeedLoginModal({ isOpen: true, type: 'RECRUIT_APPLY' });
		}
	};

	const onClickCancel = () => {
		setIsCancel(true);
	};

	const onClickBookmark = () => {
		if (!isLogin) {
			setNeedLoginModal({ isOpen: true, type: 'BOOKMARK' });
			return;
		}
		if (!isBookmarked) {
			bookmarked(pageNum);
		} else {
			unBookmarked(pageNum);
		}
	};

	return (
		<>
			<button type='button' className='btn-bookmark' onClick={onClickBookmark}>
				<img src={isBookmarked ? FilledBookmark : UnfilledBookmark} alt='북마크 아이콘' />
				<span>북마크</span>
			</button>
			{isApplied ? (
				<button type='button' className='apply' onClick={onClickApply}>
					<span>신청하기 {Number(diffDate) < 8 && Number(diffDate) > 0 && `D-${diffDate}`}</span>
				</button>
			) : (
				<button type='button' className='cancel' onClick={onClickCancel}>
					<span>신청취소</span>
				</button>
			)}
		</>
	);
};

export default ApplierFooter;
