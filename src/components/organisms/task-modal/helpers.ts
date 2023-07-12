import moment, { Moment } from 'moment';
import { PRIORITY } from '../card/Card.props';

const today = moment();

export const formData = {
	priority: '',
	title: '',
	description: '',
	status: '',
	time: today,
};

export const formValidations = {
	time: [
		(value: Moment) =>
			value != null
				? moment(value).format() != 'Invalid date'
					? true
					: false
				: false,
		'The time is required',
	],
	priority: [
		(value: PRIORITY) =>
			value == 'high' ? true : value == 'low' ? true : false,
		'The priority is required',
	],

	title: [(value: string) => value.length >= 1, 'The task is required'],
};
