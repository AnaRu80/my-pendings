import React, { useState } from 'react';
import { Box } from '@mui/material';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '../../../store';
import { Text } from '../../atoms';
export function Footer() {
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
	const totalActive = useAppSelector(
		(state): any => state.pending.pendingsList
	);
	const totalDone = useAppSelector((state): any => state.pending.totalDone);

	return (
		<Box
			mt="auto"
			sx={{
				flexDirection: 'row',
				display: 'flex',
				justifyContent: 'space-evenly',
			}}>
			<Text text={`Active: ${totalActive.length}`} />
			<Text text={`Done: ${totalDone}`} />
		</Box>
	);
}
