import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T, delay: number = 500) => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debouncedValue;
};

const useDebounceFn = <T extends (...args: any[]) => any>(fn: T, delay: number) => {
	let timeout: ReturnType<typeof setTimeout>;

	return (...args: Parameters<T>): ReturnType<T> => {
		let result: any;
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			result = fn(...args);
		}, delay);
		return result;
	};
};

export { useDebounce, useDebounceFn };
