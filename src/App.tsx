import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';

import HomePage from './pages/HomePage';
import { theme } from './Theme/theme';
import { Navbar } from './components/organisms';
import { useState } from 'react';

export default function App() {
	const { isDarkMode } = useSelector((state: any) => state.theme);

	const [activeTab, setActiveTab] = useState('all');
	const themeFn: (isDarkMode: boolean) => any = theme;
	const handleTabChange = (value: string) => {
		setActiveTab(value);
	};

	return (
		<ThemeProvider theme={themeFn(isDarkMode)}>
			<div style={{ overflowX: 'hidden' }}>
				<CssBaseline />
				<Navbar
					date="July 5, 2023"
					title="Tasks List"
					activeTab={activeTab}
					onChangeTab={handleTabChange}
				/>

				<HomePage />
			</div>
		</ThemeProvider>
	);
}
