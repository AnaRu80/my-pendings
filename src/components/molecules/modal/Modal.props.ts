import { DialogProps } from '@mui/material';

export interface ModalProps extends DialogProps {
	mainButtonText: string;
	secondaryButtonText?: string;
	mainFunction: (event: any) => void;
	secondaryFunction?: () => void;
	disableMainButton?: boolean;
}
