import { EndPoint, axiosInstance, axiosAuthInstance } from '..';
import { RecruitPostings, ApplyInfo, ApplyForm } from '../../types';

export const getPostingData = async (id: number) => {
	try {
		const response = await axiosInstance.get<RecruitPostings>(EndPoint.RECRUIT_DETAIL.posting(id));
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const getApplyData = async (id: number) => {
	try {
		const response = await axiosAuthInstance.get<ApplyInfo>(EndPoint.RECRUIT_DETAIL.applyInfo(id));
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const applyRole = async (id: number, data: ApplyForm) => {
	try {
		const response = await axiosAuthInstance.post(EndPoint.RECRUIT_DETAIL.apply(id), data);
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const bookmarkPost = async (id: number) => {
	try {
		const response = await axiosAuthInstance.post(EndPoint.RECRUIT_DETAIL.bookmark(id));
		return response;
	} catch (error) {
		console.error(error);
	}
};

export const bookmarkDelete = async (id: number) => {
	try {
		const response = await axiosAuthInstance.delete(EndPoint.RECRUIT_DETAIL.bookmark(id));
		return response;
	} catch (error) {
		console.error(error);
	}
};
