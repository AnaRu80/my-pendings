import { PRIORITY, STATUS } from '../card/Card.props';

interface PrioritySelect {
	label: string;
	value: string;
}
export const priorities: PrioritySelect[] = [
	{ label: 'high', value: 'high' },
	{ label: 'low', value: 'low' },
];
interface StatusSelect {
	label: STATUS;
	value: string;
}
export const status: StatusSelect[] = [
	{ label: 'completed', value: 'completed' },
	{ label: 'active', value: 'active' },
];

export interface IFormInput {
	description: string;
	title: string;
	priority: {} | { label: PRIORITY; value: string };
	status: {} | { label: STATUS; value: string };
	datePicker: Date | null;
}
export interface propsModal {
	isModalOpen: boolean;
	onClose: () => void;
}
