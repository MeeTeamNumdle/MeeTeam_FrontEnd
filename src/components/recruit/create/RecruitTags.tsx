import React from 'react';
import { MeeteamTag } from '../../index';
import { RecruitTags } from '../../../types';

interface RecruitTagListProps {
	tags: RecruitTags[] | undefined;
}

const RecruitTagList = ({ tags }: RecruitTagListProps) => {
	return (
		<>
			<section className='container-tags'>
				<section className='subtitle'>
					<h4>태그</h4>
				</section>
				<section className='container-tags__inputs'>
					<MeeteamTag tags={tags} />
				</section>
			</section>
			<hr className='under-info' />
		</>
	);
};

export default RecruitTagList;
