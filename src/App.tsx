import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components/index';
import { ScrollToTop } from './utils/index';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import ko from 'date-fns/locale/ko';

const queryClient = new QueryClient();

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<RecoilRoot>
					<Header />
					<main>
						<ScrollToTop />
						<Outlet />
					</main>
					<Footer />
				</RecoilRoot>
			</QueryClientProvider>
		</LocalizationProvider>
	);
}

export default App;
