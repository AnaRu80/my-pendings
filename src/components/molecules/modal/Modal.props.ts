import { DialogProps } from '@mui/material';

export interface ModalProps extends DialogProps {
	mainButtonText: string;
	secondaryButtonText?: string;
	mainFunction: () => void;
	secondaryFunction?: () => void;
}
