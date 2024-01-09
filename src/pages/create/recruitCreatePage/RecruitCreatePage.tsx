import React, { useRef, useState, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { Subtitle, Dot, InfoItem, MeeteamTag, AddButton } from '../../../components/index';
import {
	areaRecruitState,
	fieldRecruitState,
	dateRecruitState,
	deadlineState,
	categoryRecruitState,
} from '../../../atom';
import { modules } from '../../../utils/index';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import S from './recruitCreatePage.styled';

const RecruitCreatePage = () => {
	const area = useRecoilValue(areaRecruitState);
	const field = useRecoilValue(fieldRecruitState);
	const category = useRecoilValue(categoryRecruitState);
	const deadline = useRecoilValue(deadlineState);
	const quillRef = useRef<ReactQuill | null>(null);
	const [memberList, setMemberList] = useState([]);
	const copyMemberList = [...memberList];
	const [teamName, setTeamName] = useState<string>('');
	const [startDate, endDate] = useRecoilValue(dateRecruitState);
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
	const [isValidDeadline, setIsValidDeadline] = useState({
		validDeadline: false,
		validMessage: '',
	});

	const onClickMember = () => {
		// let updatedMemberList = [...memberList];
		// updatedMemberList.push(<MemberSelect id={memberList.length} />);
		// setMemberList(updatedMemberList);
	};

	const onClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
		const deletedIndex = Number(event.target.id);
		copyMemberList.splice(deletedIndex, 1);
		setMemberList(copyMemberList);
	};

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

		// 기간 검사
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

		// 구인 마감일 검사
		if (deadline < new Date()) {
			setIsValidDeadline({
				validDeadline: false,
				validMessage: '* 날짜를 다시 설정해주세요.',
			});
		}
		if (deadline > new Date()) {
			setIsValidDeadline({
				validDeadline: true,
				validMessage: '',
			});
		}
	};
	return (
		<S.RecruitCreatePage>
			<div className='procedure'>
				<div className='procedure__subtitle'>구인 글 작성</div>
				<div className='procedure__intro'>
					<p>구인에 대한 정보를 입력하시고 소개해주세요.</p>
				</div>
			</div>
			<div className='wrapper'>
				<form onSubmit={handleSubmit}>
					<div className='container'>
						<div className='container__teamname'>
							<div className='container__teamname-subtitle'>
								<Subtitle>{'구인 글 제목'}</Subtitle>
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
								<div className='container__info-select'>
									<div>
										<InfoItem isDot='true' title='구인 마감일' optionData={[]} type='구인 마감일' />
										{!isValidDeadline.validDeadline && <p>{isValidDeadline.validMessage}</p>}
									</div>
								</div>
							</div>
						</div>
						<div className='container__tag'>
							<div>
								<Subtitle>{'구인 태그'}</Subtitle>
							</div>
							<div>
								<MeeteamTag />
							</div>
						</div>
						<div className='container__intro'>
							<div>
								<Subtitle>{'구인 글'}</Subtitle>
							</div>
							<div>
								<ReactQuill className='editor' ref={quillRef} theme='snow' modules={modules} />
							</div>
						</div>
						<div className='container__img'>
							<div>
								<Subtitle>{'구인 이미지'}</Subtitle>
							</div>
							<div className='container__img-input'>
								<input
									type='file'
									accept='image/*'
									id='meeteamImg'
									placeholder='이미지를 업로드해주세요.'
									onChange={onChangeImg}
								/>
								<label className={file ? 'haveFile' : ''} htmlFor='meeteamImg'>
									{file ? `${fileName}` : '이미지를 업로드해주세요.'}
								</label>
							</div>
						</div>
						<div className='container__member'>
							<div>
								<Subtitle>{'멤버'}</Subtitle>
							</div>
							<div className='container__member-area'>
								{/* {memberList.map((memberItem, index) => {
									return (
										<div className='controll' key={index}>
											{React.cloneElement(memberItem, { key: index })}
											<button id={index.toString()}>초대</button>
											<button onClick={onClickDelete} id={index.toString()}>
												삭제
											</button>
										</div>
									);
								})} */}
							</div>
							<div className='container__member-add'>
								{memberList.length !== 6 && (
									<div className='addition' onClick={onClickMember}>
										<AddButton />
									</div>
								)}
							</div>
						</div>
						<div className='container__controller'>
							<button onClick={onClickCancel}>취소</button>
							<button type='submit'>등록하기</button>
						</div>
					</div>
				</form>
			</div>
		</S.RecruitCreatePage>
	);
};

export default RecruitCreatePage;
