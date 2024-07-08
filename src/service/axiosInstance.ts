import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { CustomInstance } from '../types';
import qs from 'qs';
import secureLocalStorage from 'react-secure-storage';
import { issueToken } from './';

const axiosConfig = {
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
};

const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY;
const REFRESH_TOKEN_KEY = import.meta.env.VITE_REFRESH_TOKEN_KEY;

export const axiosInstance: CustomInstance = axios.create(axiosConfig);
export const axiosAuthInstance: CustomInstance = axios.create(axiosConfig);

axiosInstance.defaults.paramsSerializer = params => {
	return qs.stringify(params, { arrayFormat: 'repeat' });
};

axiosAuthInstance.defaults.paramsSerializer = params => {
	return qs.stringify(params, { arrayFormat: 'repeat' });
};

const reissueToken = () => {
	issueToken().then(async res => {
		if (res?.status === 200 && res.data.accessToken && res.data.refreshToken) {
			secureLocalStorage.setItem(ACCESS_TOKEN_KEY, res.data.accessToken);
			secureLocalStorage.setItem(REFRESH_TOKEN_KEY, res.data.refreshToken);
			onRequest(res.config);
		}
	});
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
	return response.data;
};

const onError = (error: AxiosError) => {
	const response = error.response as AxiosResponse;

	if (response?.data) {
		console.error(response.data);
	}

	if (error.config && response?.status === 403) {
		const refreshToken = secureLocalStorage.getItem(REFRESH_TOKEN_KEY);

		error.config.headers.Authorization = `Bearer ${refreshToken}`;

		return reissueToken();
	}

	return Promise.reject(error);
};

axiosInstance.interceptors.response.use(onResponse, onError);
axiosAuthInstance.interceptors.response.use(onResponse, onError);

const onRequest = (config: InternalAxiosRequestConfig) => {
	const accessToken = secureLocalStorage.getItem(ACCESS_TOKEN_KEY);

	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
};

axiosAuthInstance.interceptors.request.use(onRequest, onError);
