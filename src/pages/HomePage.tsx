import React, { useState, useMemo } from 'react';
import { Text } from '../components/atoms';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store';

import {
	AddCard,
	AddPendingModal,
	Footer,
	SortableItem,
} from '../components/organisms';
import { Box, Grid } from '@mui/material';
import { PendingListProps } from '../store/pending-slice';
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

	return (
		<Box sx={HomePageStyles}>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handlerDragEnd}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 1, sm: 2, md: 4 }}>
					<AddCard openModal={() => setIsModalOpen(true)} />
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
