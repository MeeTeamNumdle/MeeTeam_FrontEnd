import React, { useState, useRef, useEffect } from 'react';
import S from './Dropdown.styled';
import DropdownArrow from './DropdownArrow';

interface IDropdown {
	data: string[];
	initialData?: string;
	$arrowNeed?: boolean;
	$showDropdown?: boolean;
}

const Dropdown = ({ data, initialData, $arrowNeed }: IDropdown) => {
	const [currentValue, setCurrentValue] = useState(`${initialData}`);
	const [showDropdown, setShowDropdown] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	const onClickDropdown = () => {
		setShowDropdown(prev => !prev);
	};

	const onClickList = (event: React.MouseEvent<HTMLElement>) => {
		const { innerText } = event.target as HTMLElement;
		setCurrentValue(innerText);
	};

	useEffect(() => {
		const outsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (showDropdown && dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
				setShowDropdown(false);
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [dropdownRef.current, showDropdown]);

	return (
		<S.Dropdown $arrowNeed={$arrowNeed} $showDropdown={showDropdown}>
			<div className='menu' onClick={onClickDropdown} ref={dropdownRef}>
				<div className='temp'>
					<span>{currentValue}</span>
					<span>
						<DropdownArrow />
					</span>
				</div>
				{showDropdown && (
					<div className='dropdown'>
						<ul className='menu-container'>
							{data.map((e: string, index: number) => (
								<li onClick={onClickList} key={index}>
									{e}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</S.Dropdown>
	);
};

export default Dropdown;
