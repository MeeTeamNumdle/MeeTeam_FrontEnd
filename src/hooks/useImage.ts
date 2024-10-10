import { fetchImageWithCacheControl } from './../service/image/image';
import { useQuery, useMutation } from '@tanstack/react-query';
import { readImagePresignedUrl, readImageListPresignedUrl, uploadImageFile } from '../service';

const imageKeys = {
	readImagePresignedUrl: (fileName: string) => ['readImagePresignedUrl', fileName],
	readImageListPresignedUrl: ({
		fileName,
		portfolioId,
	}: {
		fileName: string;
		portfolioId?: string;
	}) => ['readImageListPresignedUrl', fileName, portfolioId],
	uploadImageFile: ['useUploadImageFile'],
	fetchImageWithCacheControl: ['fetchImageWithCacheControl'],
};

/**
 * @description 단일 이미지 업로드를 위한 presignedURL 조회 API를 호출하는 hook입니다.
 */
export const useReadImagePresignedUrl = (fileName: string) => {
	return useQuery({
		queryKey: imageKeys.readImagePresignedUrl(fileName),
		queryFn: () => readImagePresignedUrl(fileName),
		enabled: false,
	});
};

/**
 * @description 다중 이미지 업로드를 위한 presignedURL 조회 API를 호출하는 hook입니다.
 */
export const useReadImageListPresignedUrl = (fileName: string, portfolioId?: string) => {
	return useQuery({
		queryKey: imageKeys.readImageListPresignedUrl({ fileName, portfolioId }),
		queryFn: () => readImageListPresignedUrl({ fileName, portfolioId }),
		enabled: false,
	});
};

/**
 * @description S3 에 이미지 바이너리 파일 업로드 API를 호출하는 hook입니다.
 */
export const useUploadImageFile = ({ onSuccess }: { onSuccess: () => void }) => {
	return useMutation({
		mutationFn: uploadImageFile,
		onSuccess: () => {
			onSuccess?.();
		},
	});
};

export const useFetchImageWithCacheControl = (imageUrl: string) => {
	console.group('useFetchImageWithCacheControl');
	console.log(imageUrl);
	console.groupEnd();
	return useQuery({
		queryKey: imageKeys.fetchImageWithCacheControl,
		queryFn: () => fetchImageWithCacheControl(imageUrl),
		enabled: !!imageUrl,
	});
};
