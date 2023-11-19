import React, { useRef, useState } from 'react';
import { Subtitle, Dot, InfoItem, Tag, MemberSelect } from '../../components';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { modules } from '../../utils/index';
import { useNavigate } from 'react-router-dom';
import S from './MeeTeamCreatePage.styled';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MeeTeamCreatePage = () => {
	const navigate = useNavigate();
	const quillRef = useRef<ReactQuill | null>(null);
	const [memberList, setMemberList] = useState([<MemberSelect />]);

	const onClickMember = (event: React.MouseEvent<HTMLButtonElement>) => {
		let updatedMemberList = [...memberList];
		updatedMemberList.push(<MemberSelect />);
		setMemberList(updatedMemberList);
	};

	const onClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
		const deletedMember = memberList[+event.target.value];
		const filteredMemberList = memberList.filter(member => member !== deletedMember);
		setMemberList(filteredMemberList);
	};

	const onClickCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
		// 모달창 띄워서 한 번 더 확인시키고 이동하기
		navigate('/');
	};

	return (
		<S.MeeTeamCreatePage>
			<div className='procedure'>
				<div className='procedure__subtitle'>새 밋팀 생성</div>
				<div className='procedure__intro'>
					<p>📝 밋팀에 대한 정보를 입력하시고 소개해주세요.</p>
				</div>
			</div>
			<div className='wrapper'>
				<div className='container'>
					<div className='container__teamname'>
						<div className='container__teamname-subtitle'>
							<Subtitle>{'밋팀 팀명'}</Subtitle>
							<Dot />
						</div>
						<div className='container__teamname-input'>
							<input placeholder='밋팀 팀명을 입력해주세요.' type='text' />
						</div>
					</div>
					<div className='container__info'>
						<div>
							<Subtitle>{'밋팀 정보'}</Subtitle>
						</div>
						<div className='info-wrapper'>
							<div className='container__info-select'>
								<InfoItem isDot='true' title='범위' optionData={['교내', '교외']} />
								<InfoItem isDot='true' title='밋팀 분야' optionData={['개발']} />
							</div>
							<div className='container__info-select'>
								<InfoItem isDot='true' title='밋팀 유형' optionData={['프로젝트', '스터디']} />
								<InfoItem isDot='false' title='진행 방식' optionData={['온라인', '오프라인']} />
							</div>
							<div className='container__info-select'>
								<InfoItem isDot='true' title='밋팀 기간' optionData={[]} />
								<InfoItem isDot='false' title='공개 여부' optionData={['공개', '비공개']} />
							</div>
						</div>
					</div>
					<div className='container__tag'>
						<div>
							<Subtitle>{'밋팀 태그'}</Subtitle>
						</div>
						<div>
							<Tag />
						</div>
					</div>
					<div className='container__intro'>
						<div>
							<Subtitle>{'밋팀 소개'}</Subtitle>
						</div>
						<div>
							<ReactQuill className='editor' ref={quillRef} theme='snow' modules={modules} />
						</div>
					</div>
					<div className='container__member'>
						<div>
							<Subtitle>{'멤버'}</Subtitle>
						</div>
						<div>
							{memberList.map((memberItem, index) => {
								return (
									<>
										<div className='controll'>
											{memberItem}
											<button>초대하기</button>
											<button onClick={onClickDelete} value={index}>
												삭제하기
											</button>
										</div>
									</>
								);
							})}

							<div className='container__member-add'>
								{memberList.length !== 6 && (
									<div className='addition' onClick={onClickMember}>
										<MdOutlineAddCircleOutline />
									</div>
								)}
							</div>
						</div>
					</div>
					<div className='container__controller'>
						<button onClick={onClickCancel}>취소</button>
						<button>등록하기</button>
					</div>
				</div>
			</div>
		</S.MeeTeamCreatePage>
	);
};

export default MeeTeamCreatePage;
