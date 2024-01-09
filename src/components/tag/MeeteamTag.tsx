import React, { useEffect, useRef, useState } from 'react';
import S from './MeeteamTag.styled';

const MeeteamTag = () => {
	const [tagItem, setTagItem] = useState<string>('');
	const [tagList, setTagList] = useState<string[]>([]);
	const copyTagList = [...tagList];
	const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
	const options = ['#UI/UX', '#GUI', '#CX', '#BI', '#Figma'];
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			submitTagItem();
		}
	};

	const submitTagItem = () => {
		let updatedTagList = [...tagList];
		updatedTagList.push('#' + tagItem);
		setTagList(updatedTagList);
		setTagItem('');
		setIsDropdownVisible(false);
	};

	const deleteTagItem = (event: any) => {
		const deletedIndex = Number(event.target.id);
		copyTagList.splice(deletedIndex, 1);
		setTagList(copyTagList);
	};

	const onClickInput = () => {
		setIsDropdownVisible(prev => !prev);
	};

	const onClickTagOptions = (selectedTag: string) => {
		let updatedTagList = [...tagList];
		updatedTagList.push(selectedTag);
		setTagList(updatedTagList);
		setIsDropdownVisible(false);
	};

	useEffect(() => {
		const outsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (
				isDropdownVisible &&
				dropdownRef.current &&
				!dropdownRef.current.contains(target as Node)
			) {
				setIsDropdownVisible(false);
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [isDropdownVisible]);

	return (
		<S.MeeteamTag ref={dropdownRef}>
			<div className='tag__box' onClick={onClickInput}>
				{copyTagList.map((tagItem, index) => {
					return (
						<div className='tag__item' key={index}>
							<span>{tagItem}</span>
							<button onClick={deleteTagItem} id={'' + index}>
								X
							</button>
						</div>
					);
				})}
				<input
					type='text'
					placeholder='태그를 입력하고 엔터를 누르세요.'
					tabIndex={2}
					onChange={event => setTagItem(event.target.value)}
					value={tagItem}
					onKeyPress={onKeyPress}
				/>
			</div>
			{isDropdownVisible && (
				<div className='tag-dropdown'>
					{options.map((tag, index) => (
						<div className='tag__item option' key={index} onClick={() => onClickTagOptions(tag)}>
							{tag}
						</div>
					))}
				</div>
			)}
		</S.MeeteamTag>
	);
};

export default MeeteamTag;
