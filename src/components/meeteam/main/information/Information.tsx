import React from 'react';
import S from './Information.styled';

const Information = () => {
	return (
		<>
			<S.InformationOptionIcon />
			<S.InformationTitle>[팀원 구인 웹 서비스] MeeTeam</S.InformationTitle>
			<S.InformationGrid>
				<S.InformationSection>
					<S.InformationHead>소개</S.InformationHead>
					<S.InformationParagraph>
						밋팀(Meeteam)은 나 자신을 의미하는 Me, 팀을 의미하는 Team, 만남을 의미하는 Meet이 합쳐진
						단어입니다.
						<br />
						대학생들의 보다 원활한 팀프로젝트를 위해 기획하게 되었으며, 그 외에 포토폴리오로서의
						기능까지 생각하고 있습니다!
						<br />
						<br />
						☑️궁극적인 목표
						<br />
						익명이든, 익명이 아니든 오픈된 프로필을 통해서 서로에 대한 충분한 정보를 바탕으로 팀원을
						구하는 문화를 만들어 보는 것입니다.
						<br />
						<br />
						🎯타깃층
						<br />
						팀프로젝트를 해야할 때, 목적이 맞는 팀원이 필요한 대학생
					</S.InformationParagraph>
				</S.InformationSection>
				<S.InformationSection>
					<S.InformationHead>기간</S.InformationHead>
					<S.InformationParagraph>23.10.23 ~24.02.14 (약 3개월)</S.InformationParagraph>
				</S.InformationSection>
				<S.InformationSection>
					<S.InformationHead>태그</S.InformationHead>
					<S.InformationParagraph>웹</S.InformationParagraph>
				</S.InformationSection>
				<S.InformationSection>
					<S.InformationHead>범위</S.InformationHead>
					<S.InformationParagraph>교내</S.InformationParagraph>
				</S.InformationSection>
				<S.InformationSection>
					<S.InformationHead>유형</S.InformationHead>
					<S.InformationParagraph>프로젝트</S.InformationParagraph>
				</S.InformationSection>
				<S.InformationSection>
					<S.InformationHead>분야</S.InformationHead>
					<S.InformationParagraph>개발</S.InformationParagraph>
				</S.InformationSection>
			</S.InformationGrid>
		</>
	);
};

export default Information;
