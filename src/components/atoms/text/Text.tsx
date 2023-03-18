import React from 'react';
import { Typography } from '@mui/material';

import { TextProps } from './Text.props';

export function Text(props: TextProps) {
	const { text, color = 'primary', sx, variant = 'subtitle1' } = props;
	return (
		<Typography color={color} variant={variant} sx={sx}>
			{text}
		</Typography>
	);
}
