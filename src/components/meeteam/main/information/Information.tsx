import React from 'react';
import S from './Information.styled';

const Information = () => {
	interface informationProps {
		title: string;
		content: string;
	}

	const informationList: informationProps[] = [
		{
			title: '소개',
			content: `밋팀(Meeteam)은 나 자신을 의미하는 Me, 팀을 의미하는 Team, 만남을 의미하는 Meet이 합쳐진 단어입니다.\n대학생들의 보다 원활한 팀프로젝트를 위해 기획하게 되었으며, 그 외에 포토폴리오로서의 기능까지 생각하고 있습니다!\n\n☑️궁극적인 목표\n익명이든, 익명이 아니든 오픈된 프로필을 통해서 서로에 대한 충분한 정보를 바탕으로 팀원을 구하는 문화를 만들어 보는 것입니다.\n\n🎯타깃층\n팀프로젝트를 해야할 때, 목적이 맞는 팀원이 필요한 대학생`,
		},
		{
			title: '기간',
			content: `23.10.23 ~24.02.14 (약 3개월)`,
		},
		{
			title: '태그',
			content: `웹`,
		},
		{
			title: '범위',
			content: `교내`,
		},
		{
			title: '유형',
			content: `프로젝트`,
		},
		{
			title: '분야',
			content: `개발`,
		},
	];

	return (
		<>
			<S.InformationOptionIcon />
			<S.InformationTitle>[팀원 구인 웹 서비스] MeeTeam</S.InformationTitle>
			<S.InformationGrid>
				{informationList.map((information, index) => (
					<section key={index}>
						<S.InformationHead>{information.title}</S.InformationHead>
						<S.InformationParagraph>{information.content}</S.InformationParagraph>
					</section>
				))}
			</S.InformationGrid>
		</>
	);
};

export default Information;
