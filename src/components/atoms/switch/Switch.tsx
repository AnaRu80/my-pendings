import { Switch as SwitchMui, FormControlLabel } from '@mui/material';
import { SwitchProps } from './Switch.props';

export const Switch = ({ label, ...rest }: SwitchProps) => {
	return (
		<FormControlLabel
			control={<SwitchMui {...rest} />}
			label={label}
			sx={{ pb: 2, color: 'secondaryText.main' }}
		/>
	);
};
