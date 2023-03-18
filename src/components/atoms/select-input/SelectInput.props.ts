import { SelectProps } from '@mui/material';

interface options {
	label: string;
	value: number;
}
export interface SelectInputProps extends SelectProps {
	label?: string;
	options: options[];
}
