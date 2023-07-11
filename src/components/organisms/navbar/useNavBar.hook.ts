import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../../store/slices';
import { RootState } from '../../../store/store';

export function useNavBar(onChangeTab: (value: string) => void) {
	const dispatch = useDispatch();
	const { isDarkMode } = useSelector((state: RootState) => state.theme);
	const handleTabChange = (event: React.SyntheticEvent, value: string) => {
		onChangeTab(value);
	};
	const handleDarkMode = () => dispatch(toggleDarkMode());
	return {
		isDarkMode,
		handleTabChange,
		handleDarkMode,
		todayDate: moment().format('dddd, MMMM Do YYYY'),
	};
}
