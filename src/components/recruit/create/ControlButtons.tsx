import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useSetRecoilState } from 'recoil';
// import { recruitInputState } from '../../../atom';
// import { INIT_FORM_DATA } from '../../../constant';

const ControlButtons = ({ id }: { id?: string }) => {
	const location = useLocation();
	const navigate = useNavigate();
	// const setFormData = useSetRecoilState(recruitInputState);

	const cancelHandler = async () => {
		// await setFormData(INIT_FORM_DATA);

		if (location.pathname.includes('edit')) {
			navigate(`/recruitment/postings/${id}`);
		} else {
			navigate('/');
		}
	};

	return (
		<section className='container-btns'>
			<button type='button' className='cancel-btn' onClick={cancelHandler}>
				취소
			</button>
			<button type='submit' className='submit-btn'>
				{location.pathname.includes('edit') ? '저장' : '등록'}
			</button>
		</section>
	);
};

export default ControlButtons;
