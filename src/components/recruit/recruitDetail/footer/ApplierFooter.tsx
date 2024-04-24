import React, { useState } from 'react';
import { UnfilledBookmark, FilledBookmark } from '../../../../assets';
import { useSetRecoilState } from 'recoil';
import { applyModalState, applyCancelModalState } from '../../../../atom';
import { calculateDate } from '../../../../utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { cancelApply } from '../../../../service';
import { useBookmark } from '../../../../hooks';
import { useDelBookmark } from '../../../../hooks/useBookMark';

interface ApplierData {
	deadline: string;
	isApplied: boolean;
	isBookmarked: boolean;
}

const ApplierFooter = ({ deadline, isApplied, isBookmarked }: ApplierData) => {
	const { id } = useParams();
	const pageNum = Number(id);
	const setIsModal = useSetRecoilState(applyModalState);
	const diffDate = calculateDate(deadline);
	const queryClient = useQueryClient();

	const { mutate: bookmarked } = useBookmark({ queryKey: 'detailedPage' });
	const { mutate: unBookmarked } = useDelBookmark({ queryKey: 'detailedPage' });

	const cancelApplyTeam = useMutation({
		mutationFn: (pageNum: number) => cancelApply(pageNum),
	});
	const setIsCancel = useSetRecoilState(applyCancelModalState);

	const onClickApply = () => {
		setIsModal(true);
	};

	const onClickCancel = () => {
		cancelApplyTeam.mutate(pageNum, {
			onSuccess: () => {
				setIsCancel(true);
				queryClient.invalidateQueries({ queryKey: ['detailedPage'] });
			},
		});
	};

	const onClickBookmark = () => {
		if (!isBookmarked) {
			bookmarked(pageNum);
		} else {
			unBookmarked(pageNum);
		}
	};

	return (
		<>
			<button type='button' className='btn-bookmark' onClick={onClickBookmark}>
				<img src={isBookmarked ? FilledBookmark : UnfilledBookmark} />
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
