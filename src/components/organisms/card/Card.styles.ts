import { SxProps } from '@mui/material';

const CardStyles: SxProps = {
	maxWidth: 300,
	minWidth: 300,
	height: 300,
	'.simple-card': {
		height: '100%',
		'.icon': {
			fontSize: 300,
		},
	},
	'.high': {
		backgroundColor: 'red',
		height: 100,
	},

	'.medium': {
		backgroundColor: 'yellow',
		height: 100,
	},

	'.low': {
		backgroundColor: 'blue',
		height: 100,
	},
};

export default CardStyles;
