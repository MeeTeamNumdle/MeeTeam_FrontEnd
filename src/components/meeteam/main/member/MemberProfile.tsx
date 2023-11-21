import React from 'react';
import S from './Member.styled';
import { RiSchoolLine } from 'react-icons/ri';
import { SlArrowDown } from 'react-icons/sl';
import { memberProps } from './Member';

const MemberProfile = (props: { member: memberProps }) => {
	return (
		<S.MemberBox>
			<div className='member__space-between-row'>
				<S.MemberRow>
					<S.MemberProfileIcon />
					<S.MemberColumn>
						<div>{props.member.nickName}</div>
						<div className='member__small-text'>{props.member.role}</div>
					</S.MemberColumn>
				</S.MemberRow>
				<div className='member__follow-icon'>
					팔로잉
					<SlArrowDown />
				</div>
			</div>
			<S.MemberRow className='member__middle-text'>
				<div>
					<RiSchoolLine />
				</div>
				<div>{props.member.school}</div>
			</S.MemberRow>
			<div className='member__small-text'>{props.member.introduction}</div>
			<S.MemberRow className='member__small-text'>
				{props.member.specifications.map((specification, index) => (
					<div className='member__tag-icon' key={index}>
						# {specification}
					</div>
				))}
			</S.MemberRow>
		</S.MemberBox>
	);
};

export default MemberProfile;
