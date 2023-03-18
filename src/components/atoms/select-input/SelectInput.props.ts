import { SelectProps } from '@mui/material';

interface options {
	label: string;
	value: string;
}
export interface SelectInputProps extends SelectProps {
	label?: string;
	options: options[];
}
