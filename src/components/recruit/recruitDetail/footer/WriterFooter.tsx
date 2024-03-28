import React from 'react';
import { Edit, TrashCan } from '../../../../assets';

const WriterFooter = () => {
	return (
		<>
			<button type='button' className='btn-edit'>
				<img src={Edit} />
			</button>
			<button type='button' className='btn-delete'>
				<img src={TrashCan} />
			</button>
			<button type='button' className='btn-navigate_appliers'>
				신청자 보러가기
			</button>
			<button type='button' className='btn-close'>
				마감하기
			</button>
		</>
	);
};

export default WriterFooter;
