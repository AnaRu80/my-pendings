import { Moment } from 'moment';

export interface DatePickerProps {
	time: Moment;
	onDataChange: (time: string, formattedDate: Moment) => void;
	helperText: string;
	timeValid: boolean;
}
