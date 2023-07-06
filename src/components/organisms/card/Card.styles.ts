import { SxProps } from '@mui/material';
import { colors } from '../../../Theme/palette';

const CardStyles = {
	'.high': {
		backgroundColor: colors.dark.error,
		width: '2px',
		boxShadow: `0 1px 4px ${colors.dark.error}`,
	},

	'.low': {
		backgroundColor: colors.light.primary,
		width: '2px',
		boxShadow: `0 1px 4px ${colors.light.primary}`,
	},
};

export default CardStyles;
