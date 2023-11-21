import React, { useState } from 'react';
import S from './Main.sytled';
import Information from './information/Information';
import Member from './member/Member';
import WorkRegistration from './workRegistration/WorkRegistration';
import Setting from './setting/Setting';

const Main = () => {
	const [content, setContent] = useState();

	return (
		<S.MainLayout>
			<Information />
			{/* <WorkRegistration /> */}
			{/* <Member /> */}
			{/* <Setting /> */}
		</S.MainLayout>
	);
};

export default Main;
