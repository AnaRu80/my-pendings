export type PRIORITY = 'high' | 'medium' | 'low';
export type STATUS = 'done' | 'pending' | 'deleted';

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
