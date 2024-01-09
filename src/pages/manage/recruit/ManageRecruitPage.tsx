import { useState } from 'react';
import { RecruitCard } from '../../../components';
import S from './ManageRecruitPage.styled';
import { IRecruitCard } from '../../../components/recruit/RecruitCard';

const ManageRecruitPage = () => {
	const [isOn, setIsOn] = useState<boolean>(false);
	const toggleHandler = () => {
		setIsOn(prev => !prev);
	};

	const data: IRecruitCard[] = [
		{
			title: '[커뮤니티 웹 서비스 프로젝트] 디자이너 모집',
			type: '프로젝트',
			$recruit: true,
			$proceed: false,
		},
		{
			title: '[중고차 거래 서비스 프로젝트] 웹 개발자 모집',
			type: '프로젝트',
			$recruit: true,
			$proceed: false,
		},
		{
			title: '[자바스크립트 스터디] 스터디 인원 모집',
			type: '스터디',
			$recruit: false,
			$proceed: true,
		},
	];

	return (
		<S.ManageRecruitPage>
			<div className='container'>
				{data.map((e, index) => (
					<RecruitCard
						title={e.title}
						type={e.type}
						$recruit={e.$recruit}
						$proceed={e.$proceed}
						key={index}
					/>
				))}
			</div>
		</S.ManageRecruitPage>
	);
};

export default ManageRecruitPage;
