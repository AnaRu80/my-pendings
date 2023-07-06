export interface ColorPalette {
	primary: string;
	secondary: string;
	background: string;
	text: string;
	secondaryText: string;
	teritaryText: string;
	icon: string;
	error: string;
	success: string;
}

export interface ThemePalette {
	light: ColorPalette;
	dark: ColorPalette;
	// colorBlind: ColorPalette;
}

export const colors: ThemePalette = {
	light: {
		primary: '#1c646f',
		secondary: '#2d3f50',
		background: '#ffffff',
		text: '#28383d',
		secondaryText: '#5c6971',
		teritaryText: '#9f9f9f',
		icon: '#386272',
		error: '#f44336',
		success: '#4caf50',
	},
	dark: {
		primary: '#2d8390',
		secondary: '#35495e',
		background: '#121212',
		text: '#e0e0e0',
		secondaryText: '#9f9f9f',
		teritaryText: '#6c6c6c',
		icon: '#3c6e81',
		error: '#e57373',
		success: '#81c784',
	},
	// colorBlind: {
	// 	primary: '#5c6bc0',
	// 	secondary: '#f06292',
	// 	background: '#e0e0e0',
	// 	text: '#494949',
	// 	neutral: '#494949',

	// 	error: '#ef5350',
	// 	success: '#66bb6a',
	// },
};
