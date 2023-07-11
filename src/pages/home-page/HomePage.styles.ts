import { SxProps } from '@mui/material';

const HomePageStyles: SxProps = {
	flex: 1,
	overflowY: 'auto',
	padding: '0 16px',

	'.listContainer': {
		paddingX: '36px',
		paddingBottom: 'calc(64px + 2px)',
		overflowY: 'auto',
		maxHeight: '70vh',
		width: '100%',
	},
	'.footerContainer': {
		position: 'fixed',
		bottom: 0,
		left: 0,
		width: '100%',
		backgroundColor: 'background.default',
		padding: 2,
		boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)',
		textAlign: 'center',
	},
};

export default HomePageStyles;
