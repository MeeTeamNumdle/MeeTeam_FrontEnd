import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components';
import { ScrollToTop } from '../../utils';
import S from './ManagePage.styled';

const ManagePage = () => {
	return (
		<S.ManagePage>
			<Sidebar />
			<main>
				<ScrollToTop />
				<Outlet />
			</main>
		</S.ManagePage>
	);
};

export default ManagePage;
