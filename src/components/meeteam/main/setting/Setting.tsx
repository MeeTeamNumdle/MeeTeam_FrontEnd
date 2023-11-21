import React from 'react';
import S from './Setting.styled';
import { MemberRadioBox } from '../../..';
import Toggle from '../../../../utils/toggle/Toggle';

const Setting = () => {
	return (
		<>
			<S.SettingGrid>
				<section>
					<S.SettingHead>팀원</S.SettingHead>
					<MemberRadioBox />
					<S.SettingRow>
						<S.SettingChangeButton>멤버 퇴출</S.SettingChangeButton>
						<S.SettingChangeButton>리더 위임</S.SettingChangeButton>
					</S.SettingRow>
				</section>
				<section>
					<S.SettingHead>공개 여부</S.SettingHead>
					<S.SettingRow>
						<Toggle />
					</S.SettingRow>
				</section>
			</S.SettingGrid>
			<S.SettingStopButton>프로젝트 중단</S.SettingStopButton>
		</>
	);
};

export default Setting;
