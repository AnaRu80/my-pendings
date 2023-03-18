import React, { useState } from 'react';
import './App.css';
import { Button, Input, SelectInput, Text } from './components/atoms';
import { Modal } from './components/molecules';
import moment from 'moment';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './store';
import { Card, AddCard, AddPendingModal } from './components/organisms';
import { Box, Grid } from '@mui/material';
import { Pending } from '@mui/icons-material';
import { PendingListProps } from './store/pending-slice';

function App() {
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const list = useAppSelector((state): any => state.pending.pendingsList);

	return (
		<Box sx={{ margin: 8 }}>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 1, sm: 2, md: 4 }}>
				<AddCard openModal={() => setIsModalOpen(true)} />
				{list.map((pending: PendingListProps) => (
					<Card
						description={pending.description}
						priority={pending.priority}
						status={pending.status}
						time={moment().format('MMMM Do YYYY, h:mm:ss a')}
					/>
				))}
			</Grid>
			<AddPendingModal
				isModalOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</Box>
	);
}

export default App;
