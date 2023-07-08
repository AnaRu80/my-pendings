import React from 'react';
import {
	Box,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

import SelectInputStyles, { SelectContainer } from './SelectInput.styles';
import { SelectInputProps } from './SelectInput.props';

export function SelectInput(props: SelectInputProps) {
	const { sx, label, options, value, onChange, error, helperText, ...rest } =
		props;
	const sxStyles = [
		...(Array.isArray(SelectInputStyles)
			? SelectInputStyles
			: [SelectInputStyles]),
		sx,
	];
	return (
		<Box sx={SelectContainer}>
			<FormControl variant="outlined" fullWidth error={error}>
				<InputLabel id={`${label}-label`}>{label}</InputLabel>
				<Select
					sx={sxStyles}
					labelId={`${label}-label`}
					id={label}
					value={value}
					onChange={onChange}
					label={label}
					error={error}
					{...rest}>
					{options.map((option: any, index: number): any => (
						<MenuItem key={index} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>
				{error && <FormHelperText>{helperText}</FormHelperText>}
			</FormControl>
		</Box>
	);
}
