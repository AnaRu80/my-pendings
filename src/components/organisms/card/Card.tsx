import {
	Card as CardMui,
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
import { useCard } from './useCard';
import { Text } from '../../atoms';

export const Card = (todo: CardProps) => {
	const { id, title, description, priority, time, status } = todo;
	const {
		expanded,
		typographyRef,
		handleChange,
		deleteTask,
		toggleExpanded,
		isWrapped,
	} = useCard(id);

	const isActive = status == 'active' ? false : true;
	return (
		<CardMui sx={CardStyles}>
			<CardContent>
				<Grid container columnSpacing={2} alignItems="center">
					<Grid item>
						<Checkbox checked={isActive} onChange={handleChange} />
					</Grid>
					<Divider orientation="vertical" flexItem className={priority} />
					<Grid item xs={7}>
						<Text
							text={title}
							variant="h6"
							style={isActive ? { textDecoration: 'line-through' } : {}}
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
						<IconButton onClick={deleteTask}>
							<DeleteIcon />
						</IconButton>
					</Grid>
				</Grid>
			</CardContent>
		</CardMui>
	);
};
