import { SxProps } from '@mui/material';

const CardStyles: SxProps = {
	maxWidth: 345,
	'.simple-card': {
		height: 400,
		'.icon': {
			fontSize: 345,
		},
	},
	'.high': {
		backgroundColor: 'red',
		height: 140,
	},

	'.medium': {
		backgroundColor: 'yellow',
		height: 140,
	},

	'.low': {
		backgroundColor: 'blue',
		height: 140,
	},
};

export default CardStyles;
