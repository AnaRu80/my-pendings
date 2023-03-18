import * as React from 'react';
import { Box, Card as CardMui, CardActions, CardContent } from '@mui/material';
import { Button } from '../../atoms/button/Button';
import { Text } from '../../atoms';
import { CardProps } from './Card.props';
import CardStyles from './Card.styles';

export function Card(props: CardProps) {
	const { description, priority = 'high', time } = props;

	return (
		<Box sx={{ margin: 1 }}>
			<CardMui sx={CardStyles}>
				<Box className={priority} />
				<CardContent>
					<Text gutterBottom variant="h5" text={priority.toLocaleUpperCase()} />
					<Text variant="h6" color="text.secondary" text={description} />
					<Text variant="caption" color="text.secondary" text={time} />
				</CardContent>
				<CardActions>
					<Button size="small" text="Delete" color="error" />
					<Button size="small" text="Done" color="success" />
				</CardActions>
			</CardMui>
		</Box>
	);
}
