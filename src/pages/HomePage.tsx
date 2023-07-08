import React, { useState, useMemo } from 'react';
import { Button, Text } from '../components/atoms';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import AddIcon from '@mui/icons-material/Add';

import { AddTaskModal, Footer, SortableList } from '../components/organisms';
import { Box } from '@mui/material';
import HomePageStyles from './HomePage.styles';

export default function HomePage() {
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
	const [isModalOpen, setIsModalOpen] = useState(false);

	const list = useAppSelector((state): any => state.pending.pendingsList);
	const [pendings, setPendings] = useState<any>(list);
	useMemo(() => setPendings(list), [list]);

	function handleSortDueDate() {
		const pendingsSort = pendings
			.slice()
			.sort((pending1: any, pending2: any) => {
				return pending1.time > pending2.time
					? 1
					: pending1.time < pending2.time
					? -1
					: 0;
			});
		setPendings(pendingsSort);
	}

	return (
		<Box sx={HomePageStyles}>
			<Button
				text="Sort by Due Date"
				onClick={handleSortDueDate}
				className="margin-button"
				color="primary"
			/>
			<SortableList pendings={pendings} setPendings={setPendings} />
			{list.length == 0 && (
				<Text
					variant="h2"
					color={'primary'}
					text="You don't have active pendings"
				/>
			)}
			<AddTaskModal
				isModalOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
			<Button
				text="Create Task"
				startIcon={<AddIcon />}
				size="small"
				onClick={() => setIsModalOpen(true)}
			/>

			<Footer />
		</Box>
	);
}
