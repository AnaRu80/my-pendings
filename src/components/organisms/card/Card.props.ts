export type PRIORITY = 'high' | 'low';
export type STATUS = 'done' | 'active' | 'deleted';

export interface CardProps {
	id?: number | any;
	title: string;
	priority: PRIORITY;
	description?: string;
	status: STATUS;
	time: string;
}

export interface SimpleCardProps {
	openModal: () => void;
}
