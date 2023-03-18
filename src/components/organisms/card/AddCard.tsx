import * as React from 'react';
import { Box, Card as CardMui } from '@mui/material';
import CardStyles from './Card.styles';
import AddIcon from '@mui/icons-material/Add';
import { SimpleCardProps } from './Card.props';

export function AddCard({ openModal }: SimpleCardProps) {
	return (
		<Box sx={{ margin: 1 }}>
			<CardMui sx={CardStyles} onClick={openModal}>
				<Box className="simple-card">
					<AddIcon className="icon" />
				</Box>
			</CardMui>
		</Box>
	);
}
