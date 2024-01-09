import { atom } from 'recoil';

export const areaState = atom({
	key: 'areaState1',
	default: '',
});

export const fieldState = atom({
	key: 'fieldState',
	default: '',
});

export const categoryState = atom({
	key: 'categoryState',
	default: '',
});

export const dateState = atom({
	key: 'dateState',
	default: [new Date(), new Date()],
});

export const areaRecruitState = atom({
	key: 'areaRecruitState1',
	default: '',
});

export const fieldRecruitState = atom({
	key: 'fieldRecruitState1',
	default: '',
});

export const categoryRecruitState = atom({
	key: 'categoryRecruitState',
	default: '',
});

export const dateRecruitState = atom({
	key: 'dateRecruitState',
	default: [new Date(), new Date()],
});

export const deadlineState = atom({
	key: 'deadlineState',
	default: new Date(),
});

export const validNameState = atom({
	key: 'validNameState',
	default: {
		validName: false,
		validMessage: '',
	},
});

export const validAreaState = atom({
	key: 'validAreaState',
	default: {
		validArea: false,
		validMessage: '',
	},
});

export const validFieldState = atom({
	key: 'validFieldState',
	default: {
		validField: false,
		validMessage: '',
	},
});

export const validCategoryState = atom({
	key: 'validCategoryState',
	default: {
		validCategory: false,
		validMessage: '',
	},
});

export const validDateState = atom({
	key: 'validDateState',
	default: {
		validDate: false,
		validMessage: '',
	},
});
