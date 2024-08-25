import React, { useEffect, useState } from 'react';
import { recruitInputState } from '../../../../../atom';
import { useRecoilState } from 'recoil';
import { useValid } from '../../../../../hooks';

const ContainerCategory = ({ category }: { category?: string }) => {
	const [categoryType, setCategoryType] = useState<string | undefined>(category);
	const [formData, setFormData] = useRecoilState(recruitInputState);
	const { validMessage, isValid } = useValid(formData);

	const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const category = event.target.value;
		setCategoryType(category);
		setFormData(prev => ({ ...prev, category: category }));
	};

	useEffect(() => {
		if (category) {
			setFormData(prev => ({ ...prev, category: category }));
		}
	}, [category, setFormData]);

	return (
		<section className='container-category'>
			<span className='input-subtitle'>
				유형 <span>{'*'}</span>
			</span>
			<section className='radio-btns'>
				<section className='radio-btn'>
					<input
						className='radio-input'
						type='radio'
						id='project'
						name='category'
						value='프로젝트'
						checked={categoryType === '프로젝트'}
						onChange={handleCategoryChange}
					/>
					<label htmlFor='project'>프로젝트</label>
				</section>
				<section className='radio-btn'>
					<input
						className='radio-input'
						type='radio'
						id='study'
						name='category'
						value='스터디'
						checked={categoryType === '스터디'}
						onChange={handleCategoryChange}
					/>
					<label htmlFor='study'>스터디</label>
				</section>
				<section className='radio-btn'>
					<input
						className='radio-input'
						type='radio'
						id='contest'
						name='category'
						value='공모전'
						checked={categoryType === '공모전'}
						onChange={handleCategoryChange}
					/>
					<label htmlFor='contest'>공모전</label>
				</section>
			</section>
			{isValid.isSubmitted && !isValid.isCategory && (
				<p className='valid-msg'>{validMessage.category}</p>
			)}
		</section>
	);
};

export default ContainerCategory;
