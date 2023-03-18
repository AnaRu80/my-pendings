import React, { useState } from 'react';
import { Text } from '../components/atoms';
import moment from 'moment';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store';

import {
	Card,
	AddCard,
	AddPendingModal,
	Footer,
} from '../components/organisms';
import { Box, Grid, ThemeProvider } from '@mui/material';
import { PendingListProps } from '../store/pending-slice';

export default function HomePage() {
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const list = useAppSelector((state): any => state.pending.pendingsList);

	return (
		<Box
			sx={{
				margin: '5vh',
				height: '90vh',
				display: 'flex',
				flexDirection: 'column',
			}}>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 1, sm: 2, md: 4 }}>
				<AddCard openModal={() => setIsModalOpen(true)} />
				{list?.map((pending: PendingListProps) => (
					<Card
						key={pending.id}
						id={pending.id}
						description={pending.description}
						priority={pending.priority}
						status={pending.status}
						time={moment().format('MMMM Do YYYY, h:mm:ss a')}
					/>
				))}
			</Grid>
			{list.length == 0 && (
				<Text
					variant="h2"
					color={'black'}
					text="You don't have active pendings"
				/>
			)}
			<AddPendingModal
				isModalOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
			<Footer />
		</Box>
	);
}
