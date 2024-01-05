import React, { useState, useRef, useEffect } from 'react';
import S from './Dropdown.styled';

interface IDropdown {
	data: string[];
	initialData?: string;
}

const Dropdown = ({ data, initialData }: IDropdown) => {
	const [currentValue, setCurrentValue] = useState(`${initialData}`);
	const [showDropdown, setShowDropdown] = useState(false);
	const dropdownRef = useRef();

	const onClickDropdown = () => {
		setShowDropdown(prev => !prev);
	};

	const onClickList = (event: React.MouseEvent<HTMLElement>) => {
		const { innerText } = event.target as HTMLElement;
		setCurrentValue(innerText);
	};

	useEffect(() => {
		const outsideClick = (event: any) => {
			const { target } = event;
			if (showDropdown && dropdownRef.current && !dropdownRef.current.contains(target)) {
				setShowDropdown(false);
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [dropdownRef.current, showDropdown]);

	return (
		<S.Dropdown>
			<div className='menu' onClick={onClickDropdown} ref={dropdownRef}>
				<label>
					{currentValue} {showDropdown ? '▲' : '▼'}
				</label>

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
