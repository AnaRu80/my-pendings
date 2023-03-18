import React from 'react';

import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectProps,
} from '@mui/material';
import SelectStyles from './SelectInput.styles';
import SelectInputStyles from './SelectInput.styles';
import { SelectInputProps } from './SelectInput.props';
export function SelectInput(props: SelectInputProps) {
	const { sx, variant = 'outlined', label, options, value, onChange } = props;
	const sxStyles = [
		...(Array.isArray(SelectStyles) ? SelectStyles : [SelectStyles]),
		sx,
	];
	return (
		<FormControl variant="outlined" fullWidth>
			<InputLabel id={`${label}-label`}>{label}</InputLabel>
			<Select
				labelId={`${label}-label`}
				id={label}
				value={value}
				onChange={onChange}
				label={label}>
				{options.map((option: any, index: number): any => (
					<MenuItem key={index} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
