import React, { useState, useEffect } from 'react';
import S from './ApplicantCard.styled';
import ProfileImage from '../../profile/image/ProfileImage';
import { DropdownArrow, DropdownArrowUp, School, User } from '../../../assets';
import { ApplicantInfo } from '../../../types';
import { useSetRecoilState } from 'recoil';
import { applicantHolder } from '../../../atom';

const ApplicantCard = ({
	applicantId,
	applyRoleName,
	departmentName,
	message,
	name,
	nickname,
	profileImg,
	score,
	universityName,
	userId,
	year,
	email,
}: ApplicantInfo) => {
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const setIsHold = useSetRecoilState(applicantHolder);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const onClickView = () => {
		setIsOpen(prev => !prev);
	};

	const onChangeCheck = () => {
		setIsChecked(prev => !prev);
	};

	useEffect(() => {
		if (isChecked) {
			setIsHold(prev => [...prev, applicantId]);
		} else {
			setIsHold(prev => prev.filter(id => id !== applicantId));
		}
	}, [isChecked]);

	return (
		<S.ApplicantCard>
			<section className='container-checkbox'>
				<input type='checkbox' checked={isChecked} onChange={onChangeCheck} />
			</section>
			<section className='container-user'>
				<section className='header'>
					<section className='user-icon'>
						<ProfileImage url={profileImg} size='3.3rem' userId={userId} />
						<span className='body1-semibold'>{nickname}</span>
					</section>
					<section className='user-info'>
						{!isOpen && (
							<>
								<section className='user-element'>
									<img src={User} alt='유저 아이콘' />
									<span className='body2-medium'>{name}</span>
								</section>
								<section className='user-element'>
									<img src={School} alt='학교 아이콘' />
									<span className='body2-medium'>{universityName}</span>
								</section>
								<section className='user-element'>
									<img src={School} alt='학교 아이콘' />
									<span className='body2-medium score'>{score !== 0 ? score : '-'}</span>
								</section>
							</>
						)}
						<section className='user-element more' onClick={onClickView}>
							<span className='body2-medium'>{!isOpen ? '더보기' : '접기'}</span>
							<img src={!isOpen ? DropdownArrow : DropdownArrowUp} alt='드롭다운 아이콘' />
						</section>
					</section>
				</section>
				{isOpen && (
					<section className='wrapper-detailed'>
						<h4>신청자 정보</h4>
						<section className='container-detailed'>
							<section className='container-detailed__row'>
								<section className='container-detailed__column'>
									<span className='body2-medium'>이름</span>
									<span className='body2-medium'>학교</span>
									<span className='body2-medium'>학과</span>
									<span className='body2-medium'>이메일</span>
								</section>
								<section className='container-detailed__column'>
									<span className='body2-medium value'>{name}</span>
									<span className='body2-medium value'>{universityName}</span>
									<span className='body2-medium value'>{departmentName}</span>
									<span className='body2-medium value'>{email}</span>
								</section>
							</section>
							<section className='container-detailed__row'>
								<section className='container-detailed__column'>
									<span className='body2-medium'>학점</span>
									<span className='body2-medium'>입학년도</span>
								</section>
								<section className='container-detailed__column'>
									<span className='body2-medium value'>{score !== 0 ? score : '-'}</span>
									<span className='body2-medium value'>{year}</span>
								</section>
							</section>
						</section>
						<hr className='detailed-hr' />
					</section>
				)}
				<section className='footer'>
					<section className='apply-info'>
						<h4>{applyRoleName}</h4>
						<span className='body2-medium message'>{message}</span>
					</section>
					<button
						type='button'
						className='btn-profile'
						onClick={() => window.open(`/profile/${userId}`)}
					>
						프로필 보러가기
					</button>
				</section>
			</section>
		</S.ApplicantCard>
	);
};

export default ApplicantCard;
