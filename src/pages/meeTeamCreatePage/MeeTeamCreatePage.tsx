import { Subtitle, Dot, InfoItem, Tag } from '../../components';
import S from './MeeTeamCreatePage.styled';

const MeeTeamCreatePage = () => {
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
								<InfoItem isDot='true' title='밋팀 기간' optionData={['교내', '교외']} />
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
