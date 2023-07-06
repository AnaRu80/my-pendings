import React, { useState } from 'react';
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Checkbox,
	IconButton,
	Grid,
	Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
	dividerContent: {
		backgroundColor: 'red',
		boxShadow: '0 2px 4px red', // Customize the box shadow values as needed
	},
	cardContainer: {
		width: '100%',
	},
}));
const TodoCard = (todo: any) => {
	const { title, description } = todo;
	const [expanded, setExpanded] = useState(false);
	const classes = useStyles();

	const toggleExpanded = () => {
		setExpanded(!expanded);
	};
	return (
		<Card className={classes.cardContainer}>
			<CardContent>
				<Grid container columnSpacing={2} alignItems="center">
					<Grid item>
						<Checkbox />
					</Grid>
					<Divider
						orientation="vertical"
						flexItem
						className={classes.dividerContent}
					/>
					<Grid item xs={7} sx={{ flex: 1 }}>
						<Typography variant="h6">{title}</Typography>
						<Typography variant="body1" noWrap={!expanded}>
							{description}
						</Typography>
						<Typography variant="caption" color="teritaryText.main">
							{'Hight Priority'}
						</Typography>

						<Typography
							variant="body2"
							color="primary"
							onClick={toggleExpanded}>
							{expanded ? 'Collapse' : 'Expand'}
						</Typography>
					</Grid>
					<Grid item>
						<IconButton>
							<DeleteIcon />
						</IconButton>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default TodoCard;
