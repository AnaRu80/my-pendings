import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';

import { Switch, Text } from '../../atoms';
import { NavbarProps } from './NavBar.props';
import { Box } from '@mui/system';
import { useNavBar } from './useNavBar.hook';

export const Navbar: React.FC<NavbarProps> = ({
	title,
	activeTab,
	onChangeTab,
}) => {
	const { isDarkMode, handleTabChange, handleDarkMode, todayDate } =
		useNavBar(onChangeTab);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="sticky"
				enableColorOnDark
				sx={{ px: 2, backgroundColor: 'background.default' }}>
				<Switch
					checked={isDarkMode}
					onChange={handleDarkMode}
					label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
				/>
				<Text variant="subtitle2" color="teritaryText.main" text={todayDate} />
				<Text variant="h4" color="text.primary" text={title} />
				<Tabs value={activeTab} onChange={handleTabChange} centered>
					<Tab color="text" label="All" value="all" />
					<Tab label="Active" value="active" />
					<Tab label="Completed" value="completed" />
				</Tabs>
			</AppBar>
		</Box>
	);
};
