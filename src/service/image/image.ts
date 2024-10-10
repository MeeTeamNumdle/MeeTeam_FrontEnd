import { ImageResponse } from '../../types';
import { axiosAuthInstance, axiosInstance } from '../axiosInstance';
import { EndPoint } from '../endPoint';

interface UploadImageFile {
	presignedUrl: string;
	imageFile: File;
}

export const readImagePresignedUrl = async (fileName: string) => {
	try {
		const response = await axiosAuthInstance.get<ImageResponse>(EndPoint.UPLOAD_IMAGE.profile, {
			params: {
				'file-name': fileName,
			},
		});

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const readImageListPresignedUrl = async ({
	fileName,
	portfolioId,
}: {
	fileName: string;
	portfolioId?: string;
}) => {
	try {
		const response = await axiosAuthInstance.get<ImageResponse[]>(EndPoint.UPLOAD_IMAGE.portfolio, {
			params: {
				'file-name': fileName,
				portfolio: portfolioId,
			},
		});

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const uploadImageFile = async ({ presignedUrl, imageFile }: UploadImageFile) => {
	try {
		const response = await axiosInstance.put(presignedUrl, imageFile, {
			headers: {
				'Content-Type': imageFile.type,
			},
		});

		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

let cachedEtag = '';

export const fetchImageWithCacheControl = async (imageUrl: string) => {
	try {
		const headers = {} as any;

		if (cachedEtag) {
			headers['If-None-Match'] = cachedEtag;
		}

		const response = await fetch(imageUrl, {
			method: 'GET',
			headers: {
				...headers,
				Accept: 'image/*',
				Origin: 'https://www.meeteam.co.kr',
			},
			// mode: 'cors',
		});

		if (response.status === 304) {
			console.log('Using cached image');
			return;
		}

		if (!response.ok) {
			throw new Error('Failed to fetch image');
		}

		cachedEtag = response.headers.get('ETag') || '';
		const blob = await response.blob();

		return URL.createObjectURL(blob);
	} catch (error) {
		console.error(error);
	}
};
