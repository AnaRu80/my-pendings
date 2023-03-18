import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: '#43ED3F',
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		error: {
			main: '#EF2917',
		},
	},
});
