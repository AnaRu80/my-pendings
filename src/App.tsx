import React, { useState } from 'react';

import { ThemeProvider } from '@mui/material';
import { theme } from './Theme/theme';
import HomePage from './pages/HomePage';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<HomePage />
		</ThemeProvider>
	);
}

export default App;
