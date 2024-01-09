import { Card, Filter } from '../../../components';
import S from './ManagePortpolio.styled';

const ManagePortpolioPage = () => {
	return (
		<S.ManagePortpolioPage>
			<Filter />
			<h1>📁 완성된 포트폴리오</h1>
			<div className='container-contents'>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</S.ManagePortpolioPage>
	);
};

export default ManagePortpolioPage;
