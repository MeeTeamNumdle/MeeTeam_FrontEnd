import React from 'react';
import S from './RecruitCreatePage.styled';
import {
	BasicInformation,
	ControlButtons,
	Description,
	DetailedInformation,
	RecruitRole,
} from '../../../components/index';
import { useMutation } from '@tanstack/react-query';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { recruitInputState, validState } from '../../../atom';
import { postingRecruit } from '../../../service/recruit/posting';
import { useNavigate } from 'react-router-dom';
import RecruitTags from '../../../components/recruit/create/RecruitTags';
import { InputState } from '../../../types';

const RecruitCreatePage = () => {
	const navigate = useNavigate();
	const setIsSubmit = useSetRecoilState(validState);
	const formData = useRecoilValue<InputState>(recruitInputState);
	const validCheck = useRecoilValue(validState);

	const uploadPost = useMutation({
		mutationFn: (formData: any) => postingRecruit(formData),
		onSuccess: () => {
			navigate(`/recruit/${uploadPost}`);
		},
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setIsSubmit(prev => ({
			...prev,
			isSubmitted: true,
		}));

		const postAvailable =
			validCheck.isCategory &&
			validCheck.isDeadline &&
			validCheck.isProcedure &&
			validCheck.isScope &&
			validCheck.isTag &&
			validCheck.isTitle;

		if (postAvailable) {
			uploadPost.mutate(formData);
		}
	};

	return (
		<S.RecruitCreatePage>
			<form onSubmit={handleSubmit}>
				<Description />
				<BasicInformation />
				<DetailedInformation />
				<RecruitRole />
				<RecruitTags />
				<ControlButtons />
			</form>
		</S.RecruitCreatePage>
	);
};

export default RecruitCreatePage;
