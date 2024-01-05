import React, { useState } from 'react';
import S from './MeeteamTag.styled';

const MeeteamTag = () => {
	const [tagItem, setTagItem] = useState<string>('');
	const [tagList, setTagList] = useState<string[]>([]);
	const copyTagList = [...tagList];

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
	};

	const deleteTagItem = (event: any) => {
		const deletedIndex = Number(event.target.id);
		copyTagList.splice(deletedIndex, 1);
		setTagList(copyTagList);
	};

	return (
		<S.MeeteamTag>
			<div className='tag__box'>
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
		</S.MeeteamTag>
	);
};

export default MeeteamTag;
