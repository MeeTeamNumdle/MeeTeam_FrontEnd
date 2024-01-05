import { BiUser } from 'react-icons/bi';
import { CustomSelect } from '..';
import S from './MemberSelect.styled';

interface IMemberSelect {
	id: number;
}

const MemberSelect = (id: IMemberSelect) => {
	return (
		<S.MemberSelect>
			<div className='area-profile'>
				<div>
					<div className='subtitle'>인원</div>
					{/* <div className='profile-info'>
						<div className='profile-info--icon'>
							<BiUser />
						</div>
						<div className='profile-info--name'>김민지</div>
					</div> */}
				</div>
			</div>
			<div className='area-role'>
				<div>
					<div className='subtitle'>역할</div>
					<div className='role-info'>
						<CustomSelect
							optionData={['프론트엔드 개발자', '백엔드 개발자', '디자이너', '기획자']}
							$isMember={true}
							key={id as any}
						/>
					</div>
				</div>
			</div>
			<div className='area-qualification'>
				<div>
					<div className='subtitle'>기술</div>
				</div>
				<div className='qualification-info'>
					<CustomSelect
						optionData={[
							'IOS',
							'안드로이드',
							'웹프론트엔드',
							'게임클라이언트',
							'임베디드SW',
							'웹서버',
							'블록체인',
							'AI',
							'DB/DS',
							'게임서버',
							'프롬프트 엔지니어',
							'시스템 개발',
							'네트워크',
							'보안',
							'DevOps',
							'그래픽스',
							'UI/UX 디자인',
							'3D 디자인',
							'그래픽 디자인',
						]}
					/>
				</div>
			</div>
		</S.MemberSelect>
	);
};

export default MemberSelect;
