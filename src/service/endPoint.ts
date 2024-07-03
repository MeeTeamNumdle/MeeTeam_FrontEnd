import { ApplicantPageInfo } from '../types';
import { DeleteComment } from '../types';

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
	SIGN_OUT: '/auth/logout',
	WITHDRAW: '/user',
	ISSUE: '/auth/reissue',

	/* profile */
	PROFILE: {
		read: (userId: string) => `/user/profile/${userId}`,
		update: '/user/profile',
		readPortfolioList: '/user/portfolios',
		image: '/user/profile/image',
	},

	/* search */
	SEARCH: {
		role: '/role/search',
		skill: '/skill/search',
	},

	/* portfolio */
	PORTFOLIO: {
		read: (portfolioId: string) => `/portfolio/${portfolioId}`,
		readPortfolioList: '/portfolio',
		create: '/portfolio',
		update: (portfolioId: string) => `/portfolio/${portfolioId}`,
		delete: (portfolioId: string) => `/portfolio/${portfolioId}`,
	},

	/* presignedURL */
	UPLOAD_IMAGE: {
		profile: '/profile/pre-signed-url',
		portfolio: '/portfolio/pre-signed-url',
	},

	/* recruit */
	RECRUIT_DETAIL: {
		posting: (id: number) => `/recruitment/postings/${id}`,
		applyInfo: (id: number) => `/recruitment/postings/${id}/apply-info`,
		apply: (id: number) => `/recruitment/postings/${id}/apply`,
		bookmark: (id: number) => `/recruitment/postings/${id}/bookmark`,
		close: (id: number) => `/recruitment/postings/${id}/close`,
		comment: (id: number) => `/recruitment/postings/${id}/comment`,
		deleteComment: ({ pageNum, commentId }: DeleteComment) =>
			`/recruitment/postings/${pageNum}/comment/${commentId}`,
	},
	/* recruit */
	RECRUITMENT: {
		post: '/recruitment/postings',
		role: (keyword: string) => `/role/search?keyword=${keyword}&limit=5`,
		skill: (keyword: string) => `/skill/search?keyword=${keyword}&limit=5`,
		course: (keyword: string) => `/course/search?keyword=${keyword}&limit=5`,
		professor: (keyword: string) => `/professor/search?keyword=${keyword}&limit=5`,
		tag: (keyword: string) => `/tag/search?keyword=${keyword}&limit=5`,
	},
	RECRUITMENT_BOARD: {
		list: '/recruitment/postings/search?size=16',
	},
	RECRUITMENT_APPLICANT: {
		info: (id: number) => `/recruitment/applicants/${id}/info`,
		list: ({ pageNum, role, page }: ApplicantPageInfo) =>
			`/recruitment/applicants/${pageNum}?page=${page}&size=8${
				role !== null ? '&role=' + role : ''
			}`,
		approved: (id: number) => `/recruitment/applicants/${id}/approve`,
		refused: (id: number) => `/recruitment/applicants/${id}/reject`,
		set: (id: number) => `/recruitment/applicants/${id}/link`,
		access: (id: number) => `/recruitment/applicants/${id}/access`,
	},
	MANAGEMENT_RECRUIT: {
		myPost: '/management/my-post?size=12',
		bookmark: '/management/bookmark?size=12',
		applied: '/management/applied?size=12',
	},
};
