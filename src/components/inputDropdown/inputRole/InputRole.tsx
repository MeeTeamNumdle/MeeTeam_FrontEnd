import React, { useState } from 'react';
import S from './InputRole.styled';
import { XBtn } from '../../../assets';

interface InputRole {
	id: number | null;
	role: string;
	count: number;
	skill: string[];
	onDelete: (id: number | null) => void;
}

const InputRole = ({ id, role, count, skill, onDelete }: InputRole) => {
	const onClickDelete = () => {
		onDelete(id);
	};

	return (
		<S.InputRole>
			<section className='inputs'>
				<span className='role body1-medium'>{role}</span>
				<span className='count body1-medium'>{count}</span>
				<section className='container-skills'>
					{skill.map((tagItem, index) => {
						return (
							<article className='tags' key={index}>
								<span>{tagItem}</span>
							</article>
						);
					})}
					{skill.length === 0 && <span className='body1-medium no-skill'>기술 미입력</span>}
				</section>
			</section>
			<button type='button' className='add-btn' onClick={onClickDelete}>
				<img src={XBtn} alt='취소 아이콘' />
			</button>
		</S.InputRole>
	);
};

export default InputRole;
