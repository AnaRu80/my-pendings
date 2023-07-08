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
	{ label: 'done', value: 'done' },
	{ label: 'active', value: 'active' },
	{ label: 'deleted', value: 'deleted' },
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
