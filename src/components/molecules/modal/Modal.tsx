import React from 'react';
import { ModalProps } from './Modal.props';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { Button } from '../../atoms';

export function Modal(props: ModalProps) {
	const {
		mainButtonText,
		secondaryButtonText,
		mainFunction,
		secondaryFunction,
		open,
		children,
		title,
	} = props;

	return (
		<Dialog open={open} onClose={() => console.log('hola')}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				{secondaryButtonText && (
					<Button
						onClick={secondaryFunction}
						text={secondaryButtonText}
						variant="outlined"
					/>
				)}
				{mainButtonText && (
					<Button onClick={mainFunction} type="submit" text={mainButtonText} />
				)}
			</DialogActions>
		</Dialog>
	);
}
