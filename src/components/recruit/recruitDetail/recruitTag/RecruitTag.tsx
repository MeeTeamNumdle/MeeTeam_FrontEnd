import React from 'react';
import S from './RecruitTag.styled';
import { RecruitTags } from '../../../../types';

const RecruitTag = (props: { tags: RecruitTags[] }) => {
	return (
		<S.RecruitTag className='wrapper-tags'>
			<h3>태그</h3>
			<section className='container-tags'>
				{props.tags.map((tag, index) => (
					<span className='tag' key={index}>
						{tag.name}
					</span>
				))}
			</section>
		</S.RecruitTag>
	);
};

export default RecruitTag;
