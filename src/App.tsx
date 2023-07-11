import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import HomePage from './pages/home-page/HomePage';
import { Navbar } from './components/organisms';
import { useApp } from './hooks';

export default function App() {
	const {
		isDarkMode,
		appBarHeight,
		appBarRef,
		activeTab,
		handleTabChange,
		themeFn,
	} = useApp();
	return (
		<ThemeProvider theme={themeFn(isDarkMode)}>
			<CssBaseline />

			<Navbar
				ref={appBarRef}
				title="Tasks List"
				activeTab={activeTab}
				onChangeTab={handleTabChange}
			/>

			<HomePage appBarHeight={appBarHeight} activeTab={activeTab} />
		</ThemeProvider>
	);
}
