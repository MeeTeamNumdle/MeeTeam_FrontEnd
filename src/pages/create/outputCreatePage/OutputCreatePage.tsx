import React, { useRef, useState, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { modules } from '../../../utils/index';
import { Subtitle, Dot, InfoItem, MeeteamTag } from '../../../components';
import { areaState, categoryState, dateState, fieldState } from '../../../atom';
import S from './OutputCreatePage.styled';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const OutputCreatePage = () => {
	const quillRef = useRef<ReactQuill | null>(null);
	const area = useRecoilValue(areaState);
	const field = useRecoilValue(fieldState);
	const category = useRecoilValue(categoryState);
	const [startDate, endDate] = useRecoilValue(dateState);

	const [teamName, setTeamName] = useState<string>('');
	const [imgFile, setImgFile] = useState<string>('');
	const [imgFileName, setImgFileName] = useState<string>('');
	const [file, setFile] = useState<string>('');
	const [fileName, setFileName] = useState<string>('');

	const [isValidName, setIsValidName] = useState({
		validName: false,
		validMessage: '',
	});
	const [isValidArea, setIsValidArea] = useState({
		validArea: false,
		validMessage: '',
	});
	const [isValidField, setIsValidField] = useState({
		validField: false,
		validMessage: '',
	});
	const [isValidCategory, setIsValidCategory] = useState({
		validCategory: false,
		validMessage: '',
	});
	const [isValidDate, setIsValidDate] = useState({
		validDate: false,
		validMessage: '',
	});

	const onClickCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
		// 모달창 띄워서 한 번 더 확인시키고 이동하기
		// navigate('/');
	};

	const onChangeTeamName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setTeamName(event.target.value);
		setIsValidName({ validName: true, validMessage: '' });
	}, []);

	const onChangeImg = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files !== null) {
			setImgFileName(event.target.files[0].name);
			const selectedFiles = event.target.files as FileList;
			setImgFile(URL.createObjectURL(selectedFiles?.[0]));
		}
	}, []);

	const onChangeFile = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files !== null) {
			console.log(event);
			setFileName(event.target.files[0].name);
			const selectedFiles = event.target.files as FileList;
			setFile(URL.createObjectURL(selectedFiles?.[0]));
		}
	}, []);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// 밋팀 팀명 글자수 검사
		if (teamName.length === 0) {
			setIsValidName({ validName: false, validMessage: '* 팀명을 입력해주세요.' });
		}
		if (teamName.length !== 0) {
			setIsValidName({ validName: true, validMessage: '' });
		}

		// 밋팀 범위 검사
		if (area === '') {
			setIsValidArea({ validArea: false, validMessage: '* 범위를 선택해주세요.' });
		}
		if (area !== '') {
			setIsValidArea({ validArea: true, validMessage: '' });
		}

		// 밋팀 분야 검사
		if (field === '') {
			setIsValidField({ validField: false, validMessage: '* 분야를 선택해주세요.' });
		}
		if (field !== '') {
			setIsValidField({ validField: true, validMessage: '' });
		}

		// 밋팀 유형 검사
		if (category === '') {
			setIsValidCategory({ validCategory: false, validMessage: '* 유형을 선택해주세요.' });
		}
		if (category !== '') {
			setIsValidCategory({ validCategory: true, validMessage: '' });
		}

		// 밋팀 기간 검사
		if (endDate < new Date()) {
			setIsValidDate({
				validDate: false,
				validMessage: '* 날짜를 다시 설정해주세요.',
			});
		}
		if (endDate > new Date()) {
			setIsValidDate({
				validDate: true,
				validMessage: '',
			});
		}
	};
	return (
		<S.OutputCreatePage>
			<div className='procedure'>
				<div className='procedure__subtitle'>산출물 등록</div>
				<div className='procedure__intro'>
					<p>산출물에 대한 정보를 입력하시고 소개해주세요.</p>
				</div>
			</div>
			<div className='wrapper'>
				<form onSubmit={handleSubmit}>
					<div className='container'>
						<div className='container__teamname'>
							<div className='container__teamname-subtitle'>
								<Subtitle>{'밋팀 팀명'}</Subtitle>
								<Dot />
							</div>
							<div className='container__teamname-input'>
								<input
									placeholder='밋팀 팀명을 입력해주세요.'
									type='text'
									onChange={onChangeTeamName}
									maxLength={20}
								/>
							</div>
							<span className='teamname-length'>
								{teamName.length > 20 ? 20 : teamName.length} / 20
							</span>
							{!isValidName.validName && <p>{isValidName.validMessage}</p>}
						</div>
						<div className='container__info'>
							<div className='info-wrapper'>
								<div className='container__info-select'>
									<div>
										<InfoItem isDot='true' title='범위' optionData={['교내', '교외']} type='범위' />
										{!isValidArea.validArea && <p>{isValidArea.validMessage}</p>}
									</div>
									<div>
										<InfoItem isDot='true' title='밋팀 분야' optionData={['개발']} type='분야' />
										{!isValidField.validField && <p>{isValidField.validMessage}</p>}
									</div>
								</div>
								<div className='container__info-select'>
									<div>
										<InfoItem
											isDot='true'
											title='밋팀 유형'
											optionData={['프로젝트', '스터디']}
											type='유형'
										/>
										{!isValidCategory.validCategory && <p>{isValidCategory.validMessage}</p>}
									</div>
									<div>
										<InfoItem isDot='false' title='진행 방식' optionData={['온라인', '오프라인']} />
									</div>
								</div>
								<div className='container__info-select'>
									<div>
										<InfoItem isDot='true' title='기간' optionData={[]} type='기간' />
										{!isValidDate.validDate && <p>{isValidDate.validMessage}</p>}
									</div>
									<div className='fix'>
										<InfoItem isDot='false' title='공개 여부' optionData={['공개', '비공개']} />
									</div>
								</div>
							</div>
						</div>
						<div className='container__tag'>
							<div>
								<Subtitle>{'밋팀 태그'}</Subtitle>
							</div>
							<div>
								<MeeteamTag tags={['React', 'Node.js', 'Spring']} />
							</div>
						</div>
						<div className='container__file'>
							<div>
								<Subtitle>{'첨부 파일'}</Subtitle>
							</div>
							<div className='container__file-input'>
								<input
									type='file'
									id='meeteamFile'
									placeholder='첨부 파일을 업로드해주세요.'
									onChange={onChangeFile}
								/>
								<label className={file ? 'haveFile' : ''} htmlFor='meeteamFile'>
									{file ? `${fileName}` : '첨부 파일을 업로드해주세요.'}
								</label>
							</div>
						</div>
						<div className='container__img'>
							<div>
								<Subtitle>{'밋팀 이미지'}</Subtitle>
							</div>
							<div className='container__img-input'>
								<input
									type='file'
									accept='image/*'
									id='meeteamImg'
									placeholder='이미지를 업로드해주세요.'
									onChange={onChangeImg}
								/>
								<label className={imgFile ? 'haveImgFile' : ''} htmlFor='meeteamImg'>
									{imgFile ? `${imgFileName}` : '이미지를 업로드해주세요.'}
								</label>
							</div>
						</div>
						<div className='container__intro'>
							<div>
								<Subtitle>{'소개 글'}</Subtitle>
							</div>
							<div>
								<ReactQuill className='editor' ref={quillRef} theme='snow' modules={modules} />
							</div>
						</div>
						<div className='container__controller'>
							<button onClick={onClickCancel}>취소</button>
							<button type='submit'>등록하기</button>
						</div>
					</div>
				</form>
			</div>
		</S.OutputCreatePage>
	);
};

export default OutputCreatePage;
