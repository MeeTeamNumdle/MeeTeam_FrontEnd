export interface ApplyRole {
	name: string;
	score: number;
	universityName: string;
	departmentName: string;
	year: number;
	email: string;
	role: {
		applyRoleId: number;
		name: string;
	};
	message: string | undefined;
}

export interface ApplyForm {
	applyRoleId: number;
	message: string | undefined;
}
export interface RoleForPost {
	roleId: number | null;
	count: number | null;
	skillIds: number[];
}

export interface InputState {
	scope: string;
	category: string;
	fieldId: number;
	deadline: string | undefined;
	proceedType: string;
	proceedingStart: string | undefined;
	proceedingEnd: string | undefined;
	courseTag: {
		isCourse: boolean;
		courseTagName: string | null;
		courseProfessor: string | null;
	};
	recruitmentRoles: RoleForPost[];
	tags: string[];
	title: string;
	content: string;
}

export interface Role {
	id: number | null;
	role: {
		id: number | null;
		name: string;
	};
	count: string;
	skill: string[];
}

export interface InputRoleForm {
	userRoleList: Role[];
	setUserRoleList: (arr: any) => void;
}

export interface InputCourse {
	isChecked: boolean;
	onClickHandler: () => void;
}
