export type PRIORITY = 'high' | 'medium' | 'low';
export type STATUS = 'done' | 'active' | 'deleted';

export interface CardProps {
	id?: number;
	priority: PRIORITY;
	description: string;
	status: STATUS;
	time: string;
}

export interface SimpleCardProps {
	openModal: () => void;
}
