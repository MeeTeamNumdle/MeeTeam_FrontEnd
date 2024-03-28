import React, { useState } from 'react';
import { Role } from '../../../../types';
import S from './RecruitRoles.styled';
import { recruitInputState } from '../../../../atom';
import { useRecoilState } from 'recoil';
import { InputRole, InputRoleForm } from '../../../index';

const RecruitRole = () => {
	const [userRoleList, setUserRoleList] = useState<Role[]>([]);
	const [info, setInfo] = useRecoilState(recruitInputState);

	const deleteObj = (id: number | null) => {
		setUserRoleList(prev => prev.filter(elem => elem.role.id !== id));
		setInfo(prev => ({
			...prev,
			recruitmentRoles: prev.recruitmentRoles.filter(elem => elem.roleId !== id),
		}));
	};
	return (
		<S.RecruitRoles>
			<section className='container-roles'>
				<section className='subtitle'>
					<h4>모집 역할</h4>
				</section>
				<section className='wrapper-roles'>
					<InputRoleForm userRoleList={userRoleList} setUserRoleList={setUserRoleList} />
					<article className='container-role__list'>
						{userRoleList.map(userRole => (
							<InputRole
								key={userRole.role.id}
								role={userRole.role.name}
								count={Number(userRole.count)}
								skill={userRole.skill}
								onDelete={() => deleteObj(userRole.role.id)}
								id={userRole.role.id}
							/>
						))}
					</article>
				</section>
			</section>
			<hr className='under-info' />
		</S.RecruitRoles>
	);
};

export default RecruitRole;
