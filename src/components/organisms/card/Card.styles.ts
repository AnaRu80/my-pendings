import { SxProps } from '@mui/material';
import { colors } from '../../../Theme/palette';

const CardStyles = {
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
		backgroundColor: colors.dark.error,
		height: 100,
	},

	'.medium': {
		backgroundColor: colors.dark.success,
		height: 100,
	},

	'.low': {
		backgroundColor: colors.light.primary,
		height: 100,
	},
};

export default CardStyles;
