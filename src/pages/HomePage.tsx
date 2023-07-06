import React, { useState, useMemo } from 'react';
import { Button, Text } from '../components/atoms';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import AddIcon from '@mui/icons-material/Add';

import { AddPendingModal, Footer, SortableItem } from '../components/organisms';
import { Box, Grid } from '@mui/material';
import { PendingListProps } from '../store/slices/pendingSlice';
import {
	DndContext,
	closestCenter,
	useSensor,
	useSensors,
	PointerSensor,
} from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	rectSortingStrategy,
} from '@dnd-kit/sortable';
import HomePageStyles from './HomePage.styles';

export default function HomePage() {
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const list = useAppSelector((state): any => state.pending.pendingsList);
	const [pendings, setPendings] = useState<any>(list);
	useMemo(() => setPendings(list), [list]);

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 8,
			},
		})
	);

	function handlerDragEnd(event: any) {
		const { active, over } = event;

		if (active.id !== over.id) {
			setPendings((items: any) => {
				const oldIndex = items.findIndex((item: any) => item.id === active.id);
				const newIndex = items.findIndex((item: any) => item.id === over.id);
				return arrayMove(items, oldIndex, newIndex);
			});
		}
	}

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
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handlerDragEnd}>
				<Grid
					spacing={{ xs: 1, md: 3 }}
					columns={{ xs: 1, sm: 2, md: 4 }}
					sx={{ my: 3 }}>
					<SortableContext items={pendings} strategy={rectSortingStrategy}>
						{pendings?.map((pending: PendingListProps) => (
							<SortableItem
								key={pending.id}
								id={pending.id}
								description={pending.description}
								priority={pending.priority}
								status={pending.status}
								time={pending.time}
							/>
						))}
					</SortableContext>
				</Grid>
			</DndContext>
			{list.length == 0 && (
				<Text
					variant="h2"
					color={'primary'}
					text="You don't have active pendings"
				/>
			)}
			<AddPendingModal
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
