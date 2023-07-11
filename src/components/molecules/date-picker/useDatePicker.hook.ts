import moment, { Moment } from 'moment';
import { useState } from 'react';

export function useDatePicker(
	onDataChange: (time: string, formattedDate: Moment) => void
) {
	const today = moment();
	const twoMonthsLater = today.clone().add(2, 'months');
	const [error, setError] = useState<string | null>(null);
	const [helperError, setHelperError] = useState<string | null>('');

	const handleDate = (date: any) => {
		const formattedDate = moment(date);
		if (!!error) return;
		onDataChange('time', formattedDate);
	};

	const handleError = (error: string | null) => {
		setError(error);
		switch (error) {
			case 'disablePast':
				setHelperError('Cannot select a past date');
				break;

			case 'minDate':
				setHelperError('Date must be after today');
				break;

			case 'maxDate':
				setHelperError('Date cannot exceed 2 months');
				break;

			case 'invalidDate':
				setHelperError('Invalid date');
				break;

			default:
				setHelperError(error);
				break;
		}
	};
	return { handleError, handleDate, error, helperError, twoMonthsLater, today };
}
