import React from 'react';
import { ButtonProps } from './Button.props';
import { Button as ButtonMui } from '@mui/material';

import ButtonStyles from './Button.styles';

export function Button(props: ButtonProps) {
	const { text, color = 'primary', sx, variant = 'contained' } = props;
	const sxStyles = [
		...(Array.isArray(ButtonStyles) ? ButtonStyles : [ButtonStyles]),
		sx,
	];
	return (
		<ButtonMui color={color} variant={variant} sx={sxStyles}>
			{text}
		</ButtonMui>
	);
}
