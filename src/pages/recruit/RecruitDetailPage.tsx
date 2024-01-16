import React from 'react';
import SRecruit from './RecruitDetailPage.styled';
import { useLocation } from 'react-router-dom';
import { Tag, Icon } from '../../components';
import ColorMatching from '../../utils/ColorMatching';

interface RequiredInformation {
	title: string;
	content: string;
}

interface Role {
	role: string;
	max: number;
	current: string[];
	specs: string[];
}

const RecruitDetailPage = () => {
	const location = useLocation();

	const informationList: RequiredInformation[] = [
		{
			title: '범위',
			content: '교내',
		},
		{
			title: '유형',
			content: '프로젝트',
		},
		{
			title: '진행',
			content: '오프라인',
		},
		{
			title: '분야',
			content: '개발',
		},
		{
			title: '기간',
			content: '23.10.23 - 24.02.14',
		},
		{
			title: '태그',
			content: '응소실,Spring,C#,Window Form',
		},
	];

	const role: Role[] = [
		{
			role: '디자이너',
			max: 2,
			current: ['Valverde'],
			specs: ['Figma'],
		},
		{
			role: '프론트엔드 개발자',
			max: 2,
			current: ['Bellinham', 'Son'],
			specs: ['TypeScript', 'React'],
		},
		{
			role: '백엔드 개발자',
			max: 2,
			current: ['Rice', 'Salah'],
			specs: ['Node.js', 'Spring'],
		},
	];

	const TAGS: string[] = ['UI/UX', '디자이너', '구인', '디자이너 구함'];

	const CONTENT =
		'밋팀(Meeteam)은 나 자신을 의미하는 Me, 팀을 의미하는 Team, 만남을 의미하는 Meet이 합쳐진 단어입니다. 대학생들의 보다 원활한 팀프로젝트를 위해 기획하게 되었으며, 그 외에 포토폴리오로서의 기능까지 생각하고 있습니다! 이를 위해 함께 멋진 서비스를 완성할 웹 디자이너를 찾고 있어요!';

	const isRound = (title: string) => {
		const roundTitles = ['유형', '진행'];

		if (roundTitles.includes(title)) {
			return false;
		}
		return true;
	};

	return (
		<SRecruit.RecruitDetailPage>
			<div className='container'>
				<div className='container-left'>
					<div className='container-info'>
						<div>
							<div className='container-info__title'>
								<h1>[커뮤니티 웹 서비스 프로젝트] 디자이너 모집</h1>
								<Tag $recruit={true} $proceed={false} />
							</div>
							<div className='container-info__writer'>
								<div className='profile-img'></div>
								<div>{'김민지'}</div>
							</div>
						</div>
						<div className='container-required__info'>
							{informationList.map((information, index) => (
								<SRecruit.RequiredInformationItem key={index}>
									<SRecruit.RequiredInformationHead>
										{information.title}
									</SRecruit.RequiredInformationHead>
									<div className='required-information__row'>
										{information.content.split(',').map((content, index) => (
											<SRecruit.RequiredInformationSpan
												$isRound={isRound(information.title)}
												$color={ColorMatching(content)}
												key={index}
											>
												{content}
											</SRecruit.RequiredInformationSpan>
										))}
									</div>
								</SRecruit.RequiredInformationItem>
							))}
						</div>
						<div className='container-introduction'>
							<h4>구인 글</h4>
							<p>{CONTENT}</p>
						</div>
					</div>
					<div className='container-current'>
						<span className='container-current__title'>구인 현황</span>
						<div className='container-current__roles'>
							{role.map((e, index) => (
								<div className='container-current__roles--element' key={index}>
									<div className='roles-info'>
										<div className='roles-info__role'>
											<div className='role'>
												{e.role} {e.current.length} / {e.max}
											</div>
											<div className='members'>
												{e.current.map((v, i) => (
													<div className='member' key={i}>
														<Icon />
													</div>
												))}
											</div>
										</div>
										<div className='roles-info__spec'>
											{e.specs.map((spec, j) => (
												<div className='spec' key={j}>
													{spec}
												</div>
											))}
										</div>
									</div>
									<button type='button' className='roles-button'>
										지원하기
									</button>
								</div>
							))}
						</div>
					</div>
					<div className='container-tags'>
						<span className='container-tags__title'>태그</span>
						<div className='container-tags__box'>
							{TAGS.map((tag, index) => (
								<div className='tag' key={index}>
									#{tag}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='container-right'>
					<div className='container-apply'>
						<form>
							<div className='container-apply__member'>
								<div>
									<span className='type'>리더</span>
									<div className='leader-info'>
										<div className='leader-info__icon'></div>
										<div className='leader-info__name'>
											<span>김민지</span>
											<span>평점: 4.8</span>
										</div>
									</div>
								</div>
								<div>
									<span className='type'>멤버</span>
									<div className='member-info'>
										<div className='member-info__icon first'>
											<Icon />
										</div>
										<div className='member-info__icon second'>
											<Icon />
										</div>
										<div className='member-info__icon third'>
											<Icon />
										</div>
									</div>
								</div>
							</div>
							<hr />
							<div className='container-apply__deadline'>
								<span>마감일</span>
								<span>{'23.10.16(7일 남음)'}</span>
							</div>
							<div className='container-apply__buttons'>
								<button type='button'>북마크하기</button>
								<button type='submit'>팀 신청하기</button>
							</div>
						</form>
					</div>
					<div className='container-recommend'>
						<div>
							<span className='title'>👀 비슷한 프로젝트</span>
						</div>
						<div className='container-recommend__img'>
							<div>
								<img src='https://ifh.cc/g/YO5Z7z.jpg' />
								<div className='container-recommend__img--tags'>
									<Tag type='오프라인' />
									<Tag type='프로젝트' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container-comments'>
				<span className='container-comments__title'>댓글</span>
				<div className='container-comments__wrapper'>
					<div className='comments'></div>
					<div className='user-input'>
						<div className='user-input__icon'>
							<Icon />
						</div>
						<input />
						<button>댓글 등록</button>
					</div>
				</div>
			</div>
		</SRecruit.RecruitDetailPage>
	);
};

export default RecruitDetailPage;
