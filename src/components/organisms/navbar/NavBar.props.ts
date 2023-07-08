export interface NavbarProps {
	date: string;
	title: string;
	activeTab: string;
	onChangeTab: (value: string) => void;
}
