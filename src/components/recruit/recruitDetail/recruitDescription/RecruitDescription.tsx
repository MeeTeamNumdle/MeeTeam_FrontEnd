import React from 'react';
import { RecruitDescription } from '../../../../types';
import S from './RecruitDescription.styled';
import DOMPurify from 'dompurify';

const RecruitDescription = ({ content }: RecruitDescription) => {
	return (
		<S.RecruitDescription>
			<h3>상세내용</h3>
			<hr />
			<section
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(String(content)),
				}}
			></section>
		</S.RecruitDescription>
	);
};

export default RecruitDescription;
