import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { Switch, Text } from '../../atoms';
import { toggleDarkMode } from '../../../store/slices';
import moment from 'moment';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/system';
interface NavbarProps {
	date: string;
	title: string;
	activeTab: string;
	onChangeTab: (value: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
	date,
	title,
	activeTab,
	onChangeTab,
}) => {
	const theme = useTheme();

	const dispatch = useDispatch();
	const { isDarkMode } = useSelector((state: any) => state.theme);
	const handleTabChange = (event: React.SyntheticEvent, value: string) => {
		onChangeTab(value);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				enableColorOnDark
				sx={{ px: 2, backgroundColor: 'background.default' }}>
				<Switch
					checked={isDarkMode}
					onChange={() => dispatch(toggleDarkMode())}
					label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
				/>
				<Text
					variant="subtitle2"
					color="teritaryText.main"
					text={moment().format('dddd, MMMM Do YYYY')}
				/>
				<Text variant="h4" color="text.primary" text={title} />
				<Tabs value={activeTab} onChange={handleTabChange} centered>
					<Tab color="text" label="All" value="all" />
					<Tab label="Completed" value="completed" />
					<Tab label="Uncompleted" value="uncompleted" />
				</Tabs>
			</AppBar>
		</Box>
	);
};
