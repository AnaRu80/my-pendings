import { ButtonProps as ButtonMuiProps } from '@mui/material';

export interface ButtonProps extends ButtonMuiProps {
	id?: string;
	text?: string;
}
