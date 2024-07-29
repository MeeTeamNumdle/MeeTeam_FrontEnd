import { simpleDate } from '../utils';
import { SAFE_DEFAULT_VALUE } from './textEditor';

export const INIT_FORM_DATA = {
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
};

export const INIT_FORM_DATA_VALID = {
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
};
