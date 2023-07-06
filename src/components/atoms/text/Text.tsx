import { Typography } from '@mui/material';
import { TextProps } from './Text.props';

export const Text = (props: TextProps) => {
	const { text, ...rest } = props;

	return <Typography {...rest}>{text}</Typography>;
};
