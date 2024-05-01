import React, { useEffect, useRef, useState } from 'react';
import S from './PortfolioEdit.styled';
import { DevTool } from '@hookform/devtools';
import {
	Input,
	ComboBox,
	Radio,
	SkillTag,
	AddFormBtn,
	LinkForm,
	DefaultBtn,
	PrimaryBtn,
	MuiDatepicker,
	PortfolioImageUpload,
	PortfolioImageModal,
	ModalPortal,
} from '../../../components';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import { Link, PortfolioPayload, Skill } from '../../../types';
import {
	useCreatePortfolio,
	useDebounce,
	useReadImageListPresignedUrl,
	useReadPortfolio,
	useReadRoleList,
	useReadSkillList,
	useUpdatePortfolio,
	useUploadImageFile,
} from '../../../hooks';
import PORTFOLIO_EDIT_DATA from './portfolioEditData';
import { modules, formats, fixModalBackground, zipFile } from '../../../utils';
import { Refresh } from '../../../assets';
import type ReactQuill from 'react-quill';
import { useRecoilValue } from 'recoil';
import { uploadImageListState } from '../../../atom';

interface FormValues {
	title?: string;
	description?: string;
	field?: string;
	role?: string;
	startDate?: string;
	endDate?: string;
	skills?: string | null;
	content?: string;
	links?: Link[];
}

const LABEL = {
	image: `최소 한 장 이상의 이미지가 업로드 되어야하며 첫번 째 이미지가 메인 이미지가 됩니다.\n단, 한 장당 30MB 이하로 최대 15장까지 업로드 가능합니다.`,
	content: `진행 했던 내용을 자유롭게 작성해주세요.`,
};
const PROCEED_TYPE = ['오프라인', '온라인', '상관없음'];

const PortfolioEditPage = () => {
	const { portfolioId } = useParams() as { portfolioId: string }; // undefined 인 경우(생성하는 경우) 로직 필요
	const navigate = useNavigate();

	const { data: portfolio, isSuccess: isSuccessReadPortfolio } = useReadPortfolio(portfolioId);
	// 작성자가 아닌 경우, 편집 방지(상세페이지로 이동)
	useEffect(() => {
		if (isSuccessReadPortfolio) {
			portfolioId && !portfolio?.isWriter && navigate(`/portfolio/${portfolioId}`);
		}
	}, [isSuccessReadPortfolio]);

	const { register, formState, handleSubmit, control, watch, getValues, setValue } =
		useForm<FormValues>({
			mode: 'onChange',
			values: {
				...portfolio,
				skills: null,
			},
			resetOptions: {
				keepDirtyValues: true,
				keepErrors: true,
			},
		});

	const createPortfolioInSuccess = (newPortfolioId: string) => {
		navigate(`/portfolio/${newPortfolioId}`);
	};
	const updatePortfolioInSuccess = (portfolioId: string) => {
		navigate(`/portfolio/${portfolioId}`);
	};

	const { mutate: createPortfolio } = useCreatePortfolio({
		onSuccess: createPortfolioInSuccess,
	});
	const { mutate: updatePortfolio } = useUpdatePortfolio({
		onSuccess: updatePortfolioInSuccess,
		portfolioId: portfolioId,
	});

	// 이미지 업로드
	const uploadImageList = useRecoilValue(uploadImageListState);
	const {
		data: imageResponse,
		refetch: readImageListPresignedUrl,
		isSuccess: isSuccessReadUrl,
	} = useReadImageListPresignedUrl(uploadImageList[0]?.fileName as string, portfolioId);

	const uploadImageFileInSuccess = () => {};

	const { mutate: uploadImageFile } = useUploadImageFile({
		onSuccess: uploadImageFileInSuccess,
	});

	useEffect(() => {
		if (isSuccessReadUrl && imageResponse) {
			zipFile(uploadImageList).then((blob: Blob) => {
				const imageListZipFile = new File([blob], imageResponse[0].fileName, {
					type: 'application/zip',
				});
				// 다중 이미지 압축 파일 업로드
				uploadImageFile({
					presignedUrl: imageResponse[0].url,
					imageFile: imageListZipFile,
				});
			});

			// 메인 이미지 업로드
			uploadImageFile({
				presignedUrl: imageResponse[1].url,
				imageFile: uploadImageList[0].file as File,
			});

			// 폼 제출
			const formData = getValues();
			const portfolioData = {
				...formData,
				mainImageFileName: imageResponse?.[1].fileName,
				zipFileName: imageResponse?.[0].fileName,
				fileOrder: uploadImageList.map(image => image.fileName),
				field: fields?.find(field => field.name === getValues('field'))?.id,
				role: roles?.find(role => role.name === getValues('role'))?.id,
				proceedType: proceedType,
				skills: skillList.map(skill => skill.id),
			} as PortfolioPayload;

			if (portfolioId) {
				updatePortfolio({
					portfolioId: portfolioId,
					portfolio: portfolioData,
				});
			} else {
				createPortfolio({ ...portfolioData });
			}
		}
	}, [isSuccessReadUrl]);

	const submitHandler: SubmitHandler<FormValues> = () => {
		readImageListPresignedUrl(); // presignedUrl 발급
	};

	// 이미지 순서 변경 모달
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		fixModalBackground(modalOpen);
	}, [modalOpen]);

	// 분야
	const fields = [{ id: '1', name: '개발' }];

	// 역할
	const role = useDebounce(watch('role')) as string;
	const { data: roles } = useReadRoleList(role);

	// 진행 방식
	const [proceedType, setProceedType] = useState(portfolio?.proceedType);
	const handleRadioClick = (id: string) => {
		setProceedType(id);
	};

	// 스킬
	const skill = useDebounce(watch('skills')) as string;
	const { data: skills } = useReadSkillList(skill);

	const [skillList, setSkillList] = useState(portfolio?.skills ? portfolio?.skills : []);

	const addSkill = () => {
		const newSkill = {
			id: skills?.find(skill => skill.name === getValues('skills'))?.id,
			name: getValues('skills'),
		} as Skill;
		if (getValues('skills')?.length === 0) return;
		if (!skillList.find(skill => newSkill.name === skill.name)) {
			setSkillList(prev => [...prev, newSkill]);
		}
		setValue('skills', '');
	};

	const deleteSkill = (skillName: string) => {
		setSkillList(() => skillList.filter(skill => skill.name !== skillName));
	};

	// 링크
	const {
		fields: links,
		prepend: prependLink,
		remove: removeLink,
	} = useFieldArray({
		name: 'links',
		control: control,
	});

	const addLink = (index: number) => {
		if (index === -1 || getValues(`links.0.url`)) {
			prependLink({ description: 'Link', url: '' });
		}
	};

	// 상세 내용
	const quillRef = useRef<ReactQuill | null>(null);
	const { ref } = register('content', PORTFOLIO_EDIT_DATA.content.validation);

	const handleChangeEditor = (value: string) => {
		setValue('content', value);
	};

	useEffect(() => {
		if (isSuccessReadPortfolio) {
			setProceedType(portfolio?.proceedType);
			setSkillList(portfolio?.skills ? portfolio?.skills : []);
		}
	}, [isSuccessReadPortfolio]);

	const checkKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') e.preventDefault();
	};

	return (
		<>
			<S.PortfolioEditLayout
				onSubmit={handleSubmit(submitHandler)}
				onKeyDown={e => checkKeyDown(e)}
			>
				<S.PortfolioEditColumn $gap='4rem'>
					<S.PortfolioEditHeader>
						<h2>포트폴리오 작성</h2>
						<h4>
							작성하신 포트폴리오는 프로필을 통해 보여집니다. 진행했던 내용을 자유롭게 작성해보세요!
						</h4>
						<hr />
					</S.PortfolioEditHeader>

					<S.PortfolioEditColumn>
						<S.PortfolioEditArticle>
							<S.PortfolioEditTitle>슬라이드 이미지</S.PortfolioEditTitle>
							<S.PortfolioEditColumn $width='clamp(50%, 76.4rem, 100%)' $gap='3.6rem'>
								<S.PortfolioEditRow>
									<S.PortfolioEditLabel $required={true}>{LABEL.image}</S.PortfolioEditLabel>
									<PrimaryBtn
										type='button'
										title='슬라이드 순서 변경'
										icon={Refresh}
										handleClick={() => setModalOpen(true)}
									/>
									{modalOpen && (
										<ModalPortal>
											<PortfolioImageModal onClose={() => setModalOpen(false)} />
										</ModalPortal>
									)}
								</S.PortfolioEditRow>
								<PortfolioImageUpload
									zipFileUrl={portfolio?.zipFileUrl}
									fileOrder={portfolio?.fileOrder}
								/>
							</S.PortfolioEditColumn>
						</S.PortfolioEditArticle>
						<hr />
					</S.PortfolioEditColumn>

					<S.PortfolioEditColumn>
						<S.PortfolioEditArticle>
							<S.PortfolioEditTitle>기본 정보</S.PortfolioEditTitle>
							<S.PortfolioEditColumn $width='clamp(50%, 76.4rem, 100%)' $gap='3.6rem'>
								{/* 포트폴리오 제목 */}
								<Input
									register={register}
									watch={watch}
									formState={formState}
									{...PORTFOLIO_EDIT_DATA.title}
								/>
								{/* 포트폴리오 한줄 소개 */}
								<Input
									register={register}
									watch={watch}
									formState={formState}
									{...PORTFOLIO_EDIT_DATA.description}
								/>
								<S.PortfolioEditRow $gap='2rem'>
									{/* 분야 */}
									<ComboBox
										register={register}
										setValue={setValue}
										formState={formState}
										getValues={getValues}
										optionList={fields}
										{...PORTFOLIO_EDIT_DATA.field}
									/>
									{/* 역할 */}
									<ComboBox
										register={register}
										setValue={setValue}
										formState={formState}
										getValues={getValues}
										optionList={roles}
										{...PORTFOLIO_EDIT_DATA.role}
									/>
								</S.PortfolioEditRow>
								{/* 진행기간 */}
								<S.PortfolioEditColumn>
									<S.PortfolioEditLabel $required={true}>진행기간</S.PortfolioEditLabel>
									<S.PortfolioEditRow $gap='2rem'>
										<MuiDatepicker name={`startDate`} control={control} />
										<MuiDatepicker name={`endDate`} control={control} />
									</S.PortfolioEditRow>
								</S.PortfolioEditColumn>
								{/* 진행방식 */}
								<S.PortfolioEditColumn>
									<S.PortfolioEditLabel $required={true}>진행방식</S.PortfolioEditLabel>
									<S.PortfolioEditRow $width='clamp(45%, 34rem, 100%)' $gap='2rem'>
										{PROCEED_TYPE.map(type => (
											<Radio
												key={type}
												name='email'
												id={type}
												state={type === proceedType}
												handleClick={handleRadioClick}
											>
												<div style={{ color: type === proceedType ? '#373F41' : '#8E8E8E' }}>
													{type}
												</div>
											</Radio>
										))}
									</S.PortfolioEditRow>
								</S.PortfolioEditColumn>
								{/* 스킬 */}
								<S.PortfolioEditColumn $gap='2rem'>
									<ComboBox
										register={register}
										setValue={setValue}
										formState={formState}
										getValues={getValues}
										optionList={skills}
										clickOption={addSkill}
										{...PORTFOLIO_EDIT_DATA.skills}
									/>
									<S.PortfolioEditRow $gap='1.05rem'>
										{skillList?.map(({ ...props }, index) => (
											<SkillTag
												isEditable={true}
												handleClick={deleteSkill}
												key={index}
												{...props}
											/>
										))}
									</S.PortfolioEditRow>
								</S.PortfolioEditColumn>
							</S.PortfolioEditColumn>
						</S.PortfolioEditArticle>
						<hr />
					</S.PortfolioEditColumn>

					<S.PortfolioEditColumn>
						<S.PortfolioEditArticle>
							<S.PortfolioEditTitle>상세 내용</S.PortfolioEditTitle>
							<S.PortfolioEditColumn $width='clamp(50%, 76.4rem, 100%)'>
								<S.PortfolioEditLabel $required={true}>{LABEL.content}</S.PortfolioEditLabel>
								<S.PortfolioEditor
									ref={e => {
										ref(e);
										if (quillRef) quillRef.current = e;
									}}
									value={portfolio?.content}
									onChange={handleChangeEditor}
									modules={modules}
									formats={formats}
									{...PORTFOLIO_EDIT_DATA.content}
								/>
							</S.PortfolioEditColumn>
						</S.PortfolioEditArticle>
						<hr />
					</S.PortfolioEditColumn>

					<S.PortfolioEditColumn>
						<S.PortfolioEditArticle>
							<S.PortfolioEditTitle>링크</S.PortfolioEditTitle>
							<S.PortfolioEditColumn $width='clamp(50%, 76.4rem, 100%)'>
								<AddFormBtn title='링크 추가' handleClick={() => addLink(links.length - 1)} />
								<S.PortfolioEditColumn $gap='3.6rem'>
									{links?.map((link, index) => (
										<LinkForm
											key={link.id}
											index={index}
											width='clamp(10%, 11.8rem, 100%)'
											register={register}
											formState={formState}
											getValues={getValues}
											setValue={setValue}
											remove={removeLink}
										/>
									))}
								</S.PortfolioEditColumn>
							</S.PortfolioEditColumn>
						</S.PortfolioEditArticle>
						<hr />
					</S.PortfolioEditColumn>

					<S.PortfolioEditButtonBox>
						<DefaultBtn
							type='button'
							title='취소'
							handleClick={() => navigate(`/portfolio/${portfolioId}`)}
						/>
						<PrimaryBtn type='submit' title='등록' />
					</S.PortfolioEditButtonBox>
				</S.PortfolioEditColumn>
			</S.PortfolioEditLayout>
			<DevTool control={control} />
		</>
	);
};

export default PortfolioEditPage;
