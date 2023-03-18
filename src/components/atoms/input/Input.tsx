import React from 'react';
import { InputProps } from './Input.props';
import { TextField } from '@mui/material';
import InputStyles from './Input.styles';

export function Input(props: InputProps) {
	const { color = 'primary', sx, variant = 'outlined' } = props;
	const sxStyles = [
		...(Array.isArray(InputStyles) ? InputStyles : [InputStyles]),
		sx,
	];
	return <TextField {...props} sx={sxStyles} variant="outlined" />;
}
