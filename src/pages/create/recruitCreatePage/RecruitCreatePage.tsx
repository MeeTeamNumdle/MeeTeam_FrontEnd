import React, { useEffect, useState } from 'react';
import S from './RecruitCreatePage.styled';
import {
	BasicInformation,
	ControlButtons,
	Description,
	DetailedInformation,
	MeeteamTag,
	RecruitRoles,
} from '../../../components/index';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { recruitInputState, validState } from '../../../atom';
import { postingRecruit } from '../../../api';
import { useNavigate } from 'react-router-dom';
import { XBtn, Plus } from '../../../assets';
import { Role } from '../../../types';
import RecruitTags from '../../../components/recruit/create/RecruitTags';

const RecruitCreatePage = () => {
	const navigate = useNavigate();
	const [isSubmit, setIsSubmit] = useRecoilState(validState);
	const [formdata, setFormdata] = useRecoilState(recruitInputState);

	const onClickCancel = () => {
		// 모달창 띄워서 한 번 더 확인시키고 이동하기
		// navigate('/');
	};
	console.log(formdata);
	const uploadPost = useMutation({
		mutationFn: () => postingRecruit(formdata),
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setIsSubmit(prev => ({
			...prev,
			isSubmitted: true,
		}));

		uploadPost.mutate(formdata as any);
		// navigate(`/recruit/${uploadPost}`);
	};

	return (
		<S.RecruitCreatePage>
			<form onSubmit={handleSubmit}>
				<Description />
				<BasicInformation />
				<DetailedInformation />
				<RecruitRoles />
				<RecruitTags />
				<ControlButtons />
			</form>
		</S.RecruitCreatePage>
	);
};

export default RecruitCreatePage;
