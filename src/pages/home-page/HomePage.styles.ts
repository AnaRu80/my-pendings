import { SxProps } from '@mui/material';

const HomePageStyles: SxProps = {
	position: 'relative',
	minHeight: '100vh',
	overflow: 'hidden',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	'.listContainer': {
		paddingX: '36px',
		paddingBottom: 'calc(64px + 2px)',
		overflowY: 'auto',
		maxHeight: 'calc(100vh - 100px)',
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
