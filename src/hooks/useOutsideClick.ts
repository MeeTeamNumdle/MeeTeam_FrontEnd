import { useEffect } from 'react';

export const useOutsideClick = (
	ref: React.RefObject<HTMLElement>,
	isOpen: boolean,
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (isOpen && ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, ref, setIsOpen]);
};
