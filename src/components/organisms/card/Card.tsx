import * as React from 'react';
import {
	Box,
	Card as CardMui,
	CardActions,
	CardContent,
	Typography,
} from '@mui/material';
import { Button } from '../../atoms/button/Button';
import { Text } from '../../atoms';
import { CardProps } from './Card.props';
import CardStyles from './Card.styles';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromPendings, doneFromPendings } from '../../../store/slices';
import moment from 'moment';
import { colors } from '../../../Theme/palette';

export function Card(props: CardProps) {
	const { id, description, priority = 'high', time } = props;
	const { isDarkMode } = useSelector((state: any) => state.theme);

	const dispatch = useDispatch();

	const deletePending = () =>
		dispatch(
			deleteFromPendings({
				id: id,
			})
		);
	const donePending = () =>
		dispatch(
			doneFromPendings({
				id: id,
			})
		);

	let tomorrow = moment().add(1, 'days').format('D MMMM YYYY');

	const cardStyle = isDarkMode
		? {
				backgroundColor: colors.dark.background,
				border: '1px solid #fff',
		  }
		: { backgroundColor: colors.light.background };

	return (
		<Box sx={{ margin: 1 }}>
			<CardMui sx={[CardStyles, cardStyle]}>
				<Box className={priority} />
				<CardContent sx={cardStyle}>
					<Text
						gutterBottom
						variant="h5"
						color="primary"
						text={priority.toLocaleUpperCase()}
					/>
					<Typography>ghrt</Typography>

					<Text variant="h6" color="primary" text={description} />
					<Text variant="caption" color="secondary" text={time} />
				</CardContent>
				<CardActions sx={cardStyle}>
					<Button
						size="small"
						text="Delete"
						color="secondary"
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
