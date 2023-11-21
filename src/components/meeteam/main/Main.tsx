import React from 'react';
import S from './Main.sytled';
import { Information, Member, WorkRegistration, Setting } from '../..';

const Main = (props: { content: string }) => {
	interface ComponentProps {
		'📁 정보': JSX.Element;
		'👥 멤버': JSX.Element;
		'📁 작업물 등록': JSX.Element;
		'⚙️ 설정': JSX.Element;
	}

	const selectComponent: ComponentProps = {
		'📁 정보': <Information />,
		'👥 멤버': <Member />,
		'📁 작업물 등록': <WorkRegistration />,
		'⚙️ 설정': <Setting />,
	} as const;

	return (
		<S.MainLayout>
			{props.content && selectComponent[props.content as keyof ComponentProps]}
		</S.MainLayout>
	);
};

export default Main;
