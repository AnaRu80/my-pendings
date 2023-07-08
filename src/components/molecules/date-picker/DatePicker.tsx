import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker as DatePickerMui } from '@mui/x-date-pickers/DatePicker';

import { useDatePicker } from './useDatePicker.hook';

export const DatePicker = ({
	time,
	onDataChange,
	helperText,
	timeValid,
}: any) => {
	const { handleError, handleDate, error, helperError, twoMonthsLater, today } =
		useDatePicker(onDataChange);

	return (
		<>
			<LocalizationProvider dateAdapter={AdapterMoment}>
				<DatePickerMui
					label="Select a date"
					value={time}
					disablePast
					onError={error => handleError(error)}
					sx={{ width: '100%' }}
					onChange={handleDate}
					slotProps={{
						textField: {
							variant: 'outlined',
							error: !!error || timeValid,
							helperText: helperError || helperText,
						},
					}}
					minDate={today}
					maxDate={twoMonthsLater}
				/>
			</LocalizationProvider>
		</>
	);
};
