export interface NavbarProps {
	title: string;
	activeTab: string;
	onChangeTab: (value: string) => void;
	ref?: any;
}
