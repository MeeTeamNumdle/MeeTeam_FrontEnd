import { useEffect } from 'react';
import { recruitInputState, validState } from '../atom';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import simpleDate from './simpleDate';
import { SAFE_DEFAULT_VALUE } from '../constant';

const resetFormData = () => {
	const setFormData = useSetRecoilState(recruitInputState);
	const setValidState = useSetRecoilState(validState);
	const location = useLocation();

	useEffect(() => {
		setFormData({
			scope: '',
			category: '',
			fieldId: 1,
			deadline: simpleDate(new Date()),
			proceedType: '',
			proceedingStart: simpleDate(new Date()),
			proceedingEnd: simpleDate(new Date()),
			courseTag: {
				isCourse: false,
				courseTagName: '',
				courseProfessor: '',
			},
			recruitmentRoles: [{ roleName: '', roleId: null, count: null, skillIds: [], skills: [] }],
			tags: [],
			title: '',
			content: SAFE_DEFAULT_VALUE,
		});

		setValidState({
			isSubmitted: false,
			isScope: false,
			isCategory: false,
			isDeadline: false,
			isEndDate: false,
			isProcedure: false,
			isTitle: false,
			isContent: false,
			isRole: false,
			isRoleCount: false,
			isRoleName: false,
			isRoleSubmitted: false,
		});
	}, [location.pathname]);
};

export default resetFormData;
