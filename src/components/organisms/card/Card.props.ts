type PRIORITY = 'high' | 'medium' | 'low';

export interface CardProps {
	priority: PRIORITY;
	description: string;
	time: string;
}
