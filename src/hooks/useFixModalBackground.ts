import { useEffect } from 'react';
import { fixModalBackground } from '../utils';

export const useFixModalBackground = (isOpen: boolean) => {
	useEffect(() => {
		fixModalBackground(isOpen);
	}, [isOpen]);
};
