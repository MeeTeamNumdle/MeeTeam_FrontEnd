export const EndPoint = {
	/* auth */
	SIGN_IN: '/auth/social/login-or-signup',
	SIGN_UP: {
		all: '/auth/sign-up',
		nickname: '/user/search/check-duplicate',
		school: '/auth/social/email-verification',
		readUniversityList: '/university',
		readDepartmentList: '/department',
	},

	/* profile */
	PROFILE: {
		read: (userId: string) => `/user/profile/${userId}`,
	},

	/* recruit */
	RECRUIT_DETAIL: {
		posting: (id: number) => `/recruitment/postings/${id}`,
		applyInfo: (id: number) => `/recruitment/postings/${id}/apply-info`,
		apply: (id: number) => `/recruitment/postings/${id}/apply`,
		bookmark: (id: number) => `/recruitment/postings/${id}/bookmark`,
	},
	RECRUITMENT: {
		post: '/recruitment/postings',
		role: (keyword: string) => `/role/search?keyword=${keyword}&limit=5`,
		skill: (keyword: string) => `/skill/search?keyword=${keyword}&limit=5`,
		course: (keyword: string) => `/tag/search/course?keyword=${keyword}&limit=5`,
		professor: (keyword: string) => `/tag/search/professor?keyword=${keyword}&limit=5`,
		tag: (keyword: string) => `/tag/search?keyword=${keyword}&limit=5`,
	},
};
