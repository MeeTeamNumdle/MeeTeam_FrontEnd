import { EndPoint, axiosInstance, axiosAuthInstance } from '..';
import { ListResult, FilterData } from '../../types';

interface FilterItem {
	filterState: FilterData;
	isLogin?: boolean;
	page: number;
}

export const getPostList = async ({ filterState, isLogin, page }: FilterItem) => {
	try {
		if (isLogin) {
			const response = await axiosAuthInstance.get<ListResult>(EndPoint.RECRUITMENT_BOARD.list, {
				params: {
					skill: filterState.skill,
					role: filterState.role,
					tag: filterState.tag,
					page,
					...filterState,
				},
			});
			return response;
		} else {
			const response = await axiosInstance.get<ListResult>(EndPoint.RECRUITMENT_BOARD.list, {
				params: {
					skill: filterState.skill,
					role: filterState.role,
					tag: filterState.tag,
					page,
					...filterState,
				},
			});
			return response;
		}
	} catch (error) {
		console.error(error);
	}
};
