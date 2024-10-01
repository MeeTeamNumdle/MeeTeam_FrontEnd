import { useEffect } from 'react';

export const useFocusToTop = <T>(trigger: T) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [trigger]);
};
