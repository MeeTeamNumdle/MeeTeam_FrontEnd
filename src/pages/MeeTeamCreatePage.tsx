import styled from 'styled-components';
import { Subtitle, Dot, InfoItem } from '../components';

const MeeTeamCreatePage = () => {
	return (
		<SMeeTeamCreatePage>
			<div className='procedure'>
				<div className='procedure__subtitle'>새 밋팀 생성</div>
				<div className='procedure__intro'>
					<p>📝 밋팀에 대한 정보를 입력하시고 소개해주세요.</p>
				</div>
			</div>
			<div className='wrapper'>
				<div className='container'>
					<div className='container__teamname'>
						<div className='container__teamname-subtitle'>
							<Subtitle>{'밋팀 팀명'}</Subtitle>
							<Dot />
						</div>
						<input placeholder='밋팀 팀명을 입력해주세요.' type='text' />
					</div>
					<div className='container__info'>
						<div>
							<Subtitle>{'밋팀 정보'}</Subtitle>
						</div>
						<div className='info-wrapper'>
							<div className='container__info-select'>
								<InfoItem isDot='true' title='범위' />
								<InfoItem isDot='true' title='밋팀 분야' />
							</div>
							<div className='container__info-select'>
								<InfoItem isDot='true' title='밋팀 유형' />
								<InfoItem isDot='false' title='진행 방식' />
							</div>
							<div className='container__info-select'>
								<InfoItem isDot='true' title='밋팀 기간' />
								<InfoItem isDot='false' title='공개 여부' />
							</div>
						</div>
					</div>
					<div className='container__tag'>
						<div>
							<Subtitle>{'밋팀 태그'}</Subtitle>
						</div>
					</div>
					<div className='container__intro'>
						<div>
							<Subtitle>{'밋팀 소개'}</Subtitle>
						</div>
					</div>
					<div className='container__member'>
						<div>
							<Subtitle>{'멤버'}</Subtitle>
						</div>
					</div>
				</div>
			</div>
		</SMeeTeamCreatePage>
	);
};

export default MeeTeamCreatePage;

const SMeeTeamCreatePage = styled.div`
	width: 80%;
	margin: 0 auto;

	.procedure {
		height: 80px;
		border-bottom: 3px solid #ababab;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 0 5rem 0 10rem;
		box-sizing: border-box;

		.procedure__subtitle {
			color: var(--light-black, #373f41);
			font-family: Pretendard;
			font-size: 1.3rem;
			font-style: normal;
			font-weight: 600;
			line-height: 3.5rem;
			letter-spacing: 0.0125rem;
		}

		.procedure__intro {
			width: 25rem;
			height: 2.25rem;
			display: flex;
			justify-content: flex-start;
			align-items: flex-end;
			line-height: 3.5rem;
			letter-spacing: 0.0125rem;

			p {
				font-family: Inter;
				font-size: 1.1rem;
				color: var(--light-black, #576574bb);
				font-weight: 600;
				font-style: normal;
			}
		}
	}

	.wrapper {
		height: 200vh;
		background-color: #ababab48;
		margin-top: 50px;

		.container {
			width: 80%;
			margin: 0 auto;
			padding-top: 50px;
		}
		.container__teamname {
			height: 100px;

			input {
				width: 20rem;
				height: 2rem;
				border-radius: 8px;
				border: none;
				outline: none;
			}
		}

		.container__info {
			margin-top: 50px;

			.container__info-select {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				gap: 20rem;
			}
		}
		.container__tag {
			margin-top: 50px;
		}
		.container__intro {
			margin-top: 50px;
		}
		.container__member {
			margin-top: 50px;
		}
	}
`;
