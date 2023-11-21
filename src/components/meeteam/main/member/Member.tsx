import React, { useState } from 'react';
import S from './Member.styled';
import { CgClose } from 'react-icons/cg';
import MemberProfile from './MemberProfile';

export interface memberProps {
	nickName: string;
	authority: string;
	role: string;
	task: string;
	school: string;
	introduction: string;
	specifications: string[];
}

const Member = () => {
	const memberList: memberProps[] = [
		{
			nickName: '송지원',
			authority: '리더',
			role: '디자이너',
			task: '디자인',
			school: '세종대학교',
			introduction: '열심히 하겠습니다!☺️',
			specifications: ['Figma'],
		},
		{
			nickName: '김수연',
			authority: '멤버',
			role: '프론트엔드 개발자',
			task: '프론트엔드 개발',
			school: '광운대학교',
			introduction: '열심히 하겠습니다!☺️',
			specifications: ['React', 'TypeScript'],
		},
		{
			nickName: '염승준',
			authority: '멤버',
			role: '프론트엔드 개발자',
			task: '프론트엔드 개발',
			school: '광운대학교',
			introduction: '열심히 하겠습니다!☺️',
			specifications: ['React', 'TypeScript'],
		},
		{
			nickName: '송민규',
			authority: '멤버',
			role: '백엔드 개발자',
			task: '백엔드 개발',
			school: '광운대학교',
			introduction: '열심히 하겠습니다!☺️',
			specifications: ['Spring', 'Java'],
		},
		{
			nickName: '나부겸',
			authority: '멤버',
			role: '백엔드 개발자',
			task: '백엔드 개발',
			school: '광운대학교',
			introduction: '열심히 하겠습니다!☺️',
			specifications: ['Spring', 'Java'],
		},
	];

	const teamLogs = [
		'1일 전, 00님이 정보를 업데이트하셨습니다.',
		'4시간 전, 00님이 구인글을 수정하셨습니다.',
	] as const;
	const [clicked, setClicked] = useState(true);

	const clickedHandler = () => {
		setClicked(!clicked);
	};

	return (
		<S.MemberLayout>
			<div className='member__space-between-row'>
				<S.MemberRow>
					<S.MemberButton onClick={clickedHandler} $clicked={clicked}>
						프로필로 보기
					</S.MemberButton>
					<S.MemberButton onClick={clickedHandler} $clicked={!clicked}>
						역할만 보기
					</S.MemberButton>
				</S.MemberRow>
				<div>총 ({memberList.length})명</div>
			</div>
			<S.MemberColumn>
				{memberList.map((member, index) => (
					<section key={index}>
						<S.MemberHead>
							{member.authority}({member.task})
						</S.MemberHead>
					</section>
				))}
			</S.MemberColumn>
			<S.MemberRow>
				{memberList.map((member, index) => (
					<section key={index}>
						<S.MemberHead>
							{member.authority}({member.task})
						</S.MemberHead>
						<MemberProfile member={member} />
					</section>
				))}
			</S.MemberRow>
			<div>
				<S.MemberHead>팀활동</S.MemberHead>
				<S.MemberList>
					{[...teamLogs].reverse().map((log, index) => (
						<S.MemberItem key={index}>
							{log}
							<CgClose />
						</S.MemberItem>
					))}
				</S.MemberList>
			</div>
		</S.MemberLayout>
	);
};

export default Member;
