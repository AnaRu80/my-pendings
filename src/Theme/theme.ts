import { createTheme } from '@mui/material/styles';
import { colors } from './palette';

import '@mui/material/styles';

// declare module '@mui/material/styles' {
// 	interface Palette {
// 		// secondaryText: PaletteColorOptions;
// 		teritaryText: PaletteColorOptions;
// 		icon: PaletteColorOptions;
// 	}
// 	interface PaletteOptions {
// 		// secondaryText: PaletteColorOptions;
// 		teritaryText: PaletteColorOptions;
// 		icon: PaletteColorOptions;
// 	}
// }

declare module '@mui/material/styles' {
	interface Palette {
		secondaryText: Palette['primary'];
	}
	interface PaletteOptions {
		secondaryText: PaletteOptions['primary'];
	}
}

export const theme = (darkMode: boolean) => {
	const palette: any = {
		mode: darkMode ? 'dark' : 'light',
		primary: {
			main: darkMode ? colors.dark.primary : colors.light.primary,
			// contrastText: darkMode ? colors.dark.text : colors.light.text,
		},
		secondary: {
			main: darkMode ? colors.dark.secondary : colors.light.secondary,
		},
		background: {
			default: darkMode ? colors.dark.background : colors.light.background,
		},
		text: {
			primary: darkMode ? colors.dark.text : colors.light.text,
		},

		secondaryText: {
			main: darkMode ? colors.dark.secondaryText : colors.light.secondaryText,
		},
		teritaryText: {
			main: darkMode ? colors.dark.teritaryText : colors.light.teritaryText,
		},
		icon: {
			main: darkMode ? colors.dark.icon : colors.light.icon,
		},
		error: {
			main: darkMode ? colors.dark.error : colors.light.error,
		},
		success: {
			main: darkMode ? colors.dark.success : colors.light.success,
		},
	};

	return createTheme({
		palette,
		components: {
			MuiCardContent: {
				styleOverrides: {
					root: {
						padding: '1',
						'&:last-child': {
							paddingBottom: '1',
						},
					},
				},
			},
		},
	});
};
