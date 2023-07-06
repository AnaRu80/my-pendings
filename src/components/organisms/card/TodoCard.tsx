import {
	Card,
	CardContent,
	Checkbox,
	IconButton,
	Grid,
	Divider,
	Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CardStyles from './Card.styles';
import { CardProps } from './Card.props';
import { useTodoCard } from '../../../hooks';
import { Text } from '../../atoms';

export const TodoCard = (todo: CardProps) => {
	const { id, title, description, priority, time } = todo;
	const {
		checked,
		expanded,
		typographyRef,
		handleChange,
		deletePending,
		toggleExpanded,
		isWrapped,
	} = useTodoCard(id);

	return (
		<Card sx={CardStyles}>
			<CardContent>
				<Grid container columnSpacing={2} alignItems="center">
					<Grid item>
						<Checkbox checked={checked} onChange={handleChange} />
					</Grid>
					<Divider orientation="vertical" flexItem className={priority} />
					<Grid item xs={7}>
						<Text
							text={title}
							variant="h6"
							style={checked ? { textDecoration: 'line-through' } : {}}
						/>

						<Typography variant="body1" noWrap={!expanded} ref={typographyRef}>
							{description}
						</Typography>

						<Text
							text={`${priority} Priority`}
							variant="caption"
							color="teritaryText.main"
						/>

						<div>
							<Text variant="caption" color="secondary" text={time} />
						</div>
						{isWrapped && (
							<Text
								text={expanded ? 'Collapse' : 'Expand'}
								variant="body1"
								color="icon"
								onClick={toggleExpanded}
							/>
						)}
					</Grid>
					<Grid item>
						<IconButton onClick={deletePending}>
							<DeleteIcon />
						</IconButton>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};
