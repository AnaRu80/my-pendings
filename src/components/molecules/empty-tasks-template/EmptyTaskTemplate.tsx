import { Text } from '../../atoms';

export function EmptyTaskTemplate({ activeTab = '' }: any) {
	const tab = activeTab === 'all' ? '' : activeTab;
	return (
		<Text
			color="primary"
			textAlign={'center'}
			variant="h2"
			text={`You don't have ${tab} tasks`}
			marginY={2}
		/>
	);
}
