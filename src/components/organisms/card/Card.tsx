import * as React from 'react';
import { Box, Card as CardMui, CardActions, CardContent } from '@mui/material';
import { Button } from '../../atoms/button/Button';
import { Text } from '../../atoms';
import { CardProps } from './Card.props';
import CardStyles from './Card.styles';
import { useDispatch } from 'react-redux';
import { pendingActions } from '../../../store/pending-slice';

export function Card(props: CardProps) {
	const { id, description, priority = 'high', time } = props;
	const dispatch = useDispatch();

	const deletePending = () =>
		dispatch(
			pendingActions.deleteFromPendings({
				id: id,
			})
		);
	const donePending = () =>
		dispatch(
			pendingActions.doneFromPendings({
				id: id,
			})
		);
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
					<Button
						size="small"
						text="Delete"
						color="error"
						onClick={deletePending}
					/>
					<Button
						size="small"
						text="Done"
						color="primary"
						onClick={donePending}
					/>
				</CardActions>
			</CardMui>
		</Box>
	);
}
