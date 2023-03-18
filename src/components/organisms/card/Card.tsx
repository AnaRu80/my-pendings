import * as React from 'react';
import { Box, Card as CardMui, CardActions, CardContent } from '@mui/material';
import { Button } from '../../atoms/button/Button';
import { Text } from '../../atoms';
import { CardProps } from './Card.props';
import CardStyles from './Card.styles';
import AddIcon from '@mui/icons-material/Add';
import { pendingActions } from '../../../store/pending-slice';
import { useDispatch } from 'react-redux';

export default function Card(props: CardProps) {
	const { description, priority = 'high', time } = props;
	const dispatch = useDispatch();
	const addPending = () => {
		dispatch(
			pendingActions.addToPendings({
				id: 1,
				priority: 'high',
				description: '11',
				status: 'done',
			})
		);
	};
	return (
		<Box sx={{ flexDirection: 'row', flex: 1, display: 'flex' }}>
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

			<CardMui sx={CardStyles} onClick={addPending}>
				<Box className="simple-card">
					<AddIcon className="icon" />
				</Box>
			</CardMui>
		</Box>
	);
}
