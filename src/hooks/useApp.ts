import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { theme } from '../Theme/theme';
import { RootState } from '../store/store';

export function useApp() {
	const { isDarkMode } = useSelector((state: RootState) => state.theme);
	const [appBarHeight, setAppBarHeight] = useState<number | null>(null);
	const [activeTab, setActiveTab] = useState('all');
	const themeFn: (isDarkMode: boolean) => any = theme;
	const handleTabChange = (value: string) => {
		setActiveTab(value);
	};

	const appBarRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (appBarRef.current) {
			setAppBarHeight(appBarRef.current.offsetHeight);
		}
	}, []);
	return {
		isDarkMode,
		appBarHeight,
		appBarRef,
		activeTab,
		handleTabChange,
		themeFn,
	};
}
