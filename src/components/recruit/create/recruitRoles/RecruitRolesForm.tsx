import React, { useEffect, useState } from 'react';
import S from './RecruitRolesForm.styled';
import {
	recruitInputState,
	warnRoleDeleteModalState,
	warningModalRoleCountState,
} from '../../../../atom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { InputRoleForm } from '../../../index';
import { RecruitApplicant, RoleForPost, RoleInfo } from '../../../../types';
import { BluePlus } from '../../../../assets';
import { useValid } from '../../../../hooks';

interface RecruitRoleFormProps {
	applicantsList: RecruitApplicant[];
	applicantsListData?: RoleInfo[];
}

const RecruitRoleForm = ({ applicantsList, applicantsListData }: RecruitRoleFormProps) => {
	const [info, setInfo] = useRecoilState(recruitInputState);
	const [isFirstClick, setIsFirstClick] = useState<boolean>(true);
	const setWarnRoleDeleteState = useSetRecoilState(warnRoleDeleteModalState);
	const setWarningModalRoleCountState = useSetRecoilState(warningModalRoleCountState);
	const { validMessage, isValid, setValidMessage, setIsValid } = useValid(info);

	const deleteObj = (id: number | null) => {
		const roleToDelete = applicantsList?.find(role => role.roleId === id);

		if (roleToDelete) {
			if (roleToDelete.applicantCount === 0) {
				setInfo(prev => ({
					...prev,
					recruitmentRoles: prev.recruitmentRoles?.filter(elem => elem.roleId !== id),
				}));
			} else {
				setWarnRoleDeleteState(true);
			}
		} else {
			if (info.recruitmentRoles?.length > 1) {
				setInfo(prev => ({
					...prev,
					recruitmentRoles: prev.recruitmentRoles?.filter(elem => elem.roleId !== id),
				}));
			} else if (info.recruitmentRoles?.length === 1) {
				setIsValid(prev => ({ ...prev, isRole: false }));
				setValidMessage(prev => ({ ...prev, recruitRole: '최소 1개의 역할이 필요합니다.' }));
			}
		}
	};

	const handleAddRole = () => {
		const newRole = { roleName: '', roleId: null, count: null, skillIds: [], skills: [] };
		if (
			info.recruitmentRoles.length === 1 &&
			info.recruitmentRoles[0].roleName === '' &&
			info.recruitmentRoles[0].count === null
		) {
			setIsValid(prev => ({ ...prev, isRole: false }));
			setValidMessage(prev => ({ ...prev, recruitRole: '최소 1개의 역할을 입력해주세요.' }));
			setIsFirstClick(false);
		} else if (
			info.recruitmentRoles.some(
				role => role.roleName === '' || role.count === 0 || role.count === null
			)
		) {
			setIsFirstClick(false);
			setIsValid(prev => ({ ...prev, isRole: false }));
			setValidMessage(prev => ({ ...prev, recruitRole: '모집하는 역할을 입력해주세요.' }));
		} else if (info.recruitmentRoles.length === 10) {
			setWarningModalRoleCountState(true);
		} else {
			setInfo(prevState => {
				const hasNullRoleId = prevState.recruitmentRoles.some(role => role.roleId === null);
				if (!hasNullRoleId) {
					return {
						...prevState,
						recruitmentRoles: [...prevState.recruitmentRoles, newRole],
					};
				}
				return prevState;
			});
			setIsFirstClick(true);
		}
	};

	useEffect(() => {
		const hasEmptyRoleName = info.recruitmentRoles.some(
			role => role.roleName === '' || role.count === 0 || role.count === null
		);
		if (hasEmptyRoleName && !isFirstClick) {
			setIsValid(prev => ({ ...prev, isRoleSubmitted: true }));
		} else {
			setIsValid(prev => ({ ...prev, isRoleSubmitted: false }));
		}
	}, [info.recruitmentRoles, isFirstClick, setIsValid]);

	useEffect(() => {
		if (applicantsListData) {
			const convertRoleInfo = (roleInfo: RoleInfo): RoleForPost => {
				return {
					roleId: roleInfo.roleId,
					count: roleInfo.recruitCount,
					skillIds: roleInfo.skills.map(e => e.id),
					skills: roleInfo.skills,
					roleName: roleInfo.roleName,
				};
			};
			const transformedRoles = applicantsListData.map(convertRoleInfo);
			setInfo(prev => ({ ...prev, recruitmentRoles: transformedRoles }));
		}
	}, [applicantsListData, setInfo]);

	return (
		<S.RecruitRoles $isRoleLength={info.recruitmentRoles.length === 10}>
			<section className='container-roles'>
				<section className='subtitle'>
					<h4>모집 역할</h4>
				</section>
				<section className='wrapper-roles'>
					<span className='input-subtitle'>
						최소 1개에서 최대 10개까지 역할을 입력하세요. <span>*</span>
					</span>
					<article className='container-role__list'>
						{info.recruitmentRoles.map(userRole => (
							<InputRoleForm
								key={userRole.roleId}
								role={userRole.roleName}
								count={Number(userRole.count)}
								skills={userRole.skills}
								onDelete={() => deleteObj(userRole.roleId)}
								id={userRole.roleId}
							/>
						))}
					</article>
					<article className='wrapper-btn__add' onClick={handleAddRole}>
						<img src={BluePlus} className='blue-plus' />
						<button type='button' className='btn-add h5'>
							역할 추가
						</button>
					</article>
					{!isValid.isRole && isValid.isSubmitted && (
						<span className='body2-semibold warning'>{validMessage.recruitRole}</span>
					)}
				</section>
			</section>
			<hr className='under-info' />
		</S.RecruitRoles>
	);
};

export default RecruitRoleForm;
