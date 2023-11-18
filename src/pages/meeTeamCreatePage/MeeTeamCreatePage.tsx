import { useRef } from 'react';
import { Subtitle, Dot, InfoItem, Tag } from '../../components';
import S from './MeeTeamCreatePage.styled';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import { modules } from '../../utils/editorModule';

const MeeTeamCreatePage = () => {
	const quillRef = useRef<ReactQuill | null>(null);

	const modules = {
		toolbar: {
			container: [
				[{ header: [1, 2, 3, 4, 5, 6, false] }],
				[{ font: [] }],
				[{ align: [] }],
				['bold', 'italic', 'underline', 'strike', 'blockquote'],
				[{ list: 'ordered' }, { list: 'bullet' }, 'link'],
				[
					{
						color: [
							'#000000',
							'#e60000',
							'#ff9900',
							'#ffff00',
							'#008a00',
							'#0066cc',
							'#9933ff',
							'#ffffff',
							'#facccc',
							'#ffebcc',
							'#ffffcc',
							'#cce8cc',
							'#cce0f5',
							'#ebd6ff',
							'#bbbbbb',
							'#f06666',
							'#ffc266',
							'#ffff66',
							'#66b966',
							'#66a3e0',
							'#c285ff',
							'#888888',
							'#a10000',
							'#b26b00',
							'#b2b200',
							'#006100',
							'#0047b2',
							'#6b24b2',
							'#444444',
							'#5c0000',
							'#663d00',
							'#666600',
							'#003700',
							'#002966',
							'#3d1466',
							'custom-color',
						],
					},
					{ background: [] },
				],
				['image'],
				['clean'],
			],
		},
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
						<input placeholder='밋팀 팀명을 입력해주세요.' type='text' />
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
					</div>
				</div>
			</div>
		</S.MeeTeamCreatePage>
	);
};

export default MeeTeamCreatePage;
