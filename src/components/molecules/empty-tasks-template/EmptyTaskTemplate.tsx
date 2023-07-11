import { Text } from '../../atoms';

interface EmptyTaskTemplateProps {
	activeTab: string;
}
export function EmptyTaskTemplate({ activeTab = '' }: EmptyTaskTemplateProps) {
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
