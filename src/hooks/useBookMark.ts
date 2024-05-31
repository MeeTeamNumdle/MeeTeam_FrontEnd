import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookmarkDelete, bookmarkPost } from '../service/recruit/detail';
import { useDebounceFn } from './useDebounce';

interface BookmarkSuccess {
	queryKey: string;
}

export const useBookmark = ({ queryKey }: BookmarkSuccess) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: number) => bookmarkPost(id),
		onMutate: async (id: number) => {
			await queryClient.cancelQueries({ queryKey: [`${queryKey}`] });
			const previousData = queryClient.getQueryData([`${queryKey}`]);
			queryClient.setQueryData([`${queryKey}`], !previousData);
			return { previousData };
		},
		onError: (error, _, context) => {
			queryClient.setQueryData([`${queryKey}`], context?.previousData);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [`${queryKey}`] });
		},
	});
};

export const useDelBookmark = ({ queryKey }: BookmarkSuccess) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: number) => bookmarkDelete(id),
		onMutate: async (id: number) => {
			await queryClient.cancelQueries({ queryKey: [`${queryKey}`] });
			const previousData = queryClient.getQueryData([`${queryKey}`]);
			queryClient.setQueryData([`${queryKey}`], !previousData);
			return { previousData };
		},
		onError: (error, _, context) => {
			queryClient.setQueryData([`${queryKey}`], context?.previousData);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [`${queryKey}`] });
		},
	});
};
