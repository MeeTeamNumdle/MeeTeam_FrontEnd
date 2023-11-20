import React from 'react';
import S from './Member.styled';

const MemberRadioBox = () => {
	const memberList = ['송지원', '김수연', '염승준', '송민규', '나부겸'] as const;
	return (
		<ul>
			<li>
				{memberList.map((member, index) => (
					<S.MemberRadioLabel key={index}>
						<input type='radio' />
						<S.MemberProfileIcon />
						{member}
						<S.MemberButton>탈퇴</S.MemberButton>
					</S.MemberRadioLabel>
				))}
			</li>
		</ul>
	);
};

export default MemberRadioBox;
