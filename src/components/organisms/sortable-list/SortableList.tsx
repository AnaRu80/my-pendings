import { SortableItem } from '../';
import { Grid } from '@mui/material';
import { PendingListProps } from '../../../store/slices/pendingSlice';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { useSortableList } from '../../../hooks/useSortableList';

export const SortableList = ({ pendings, setPendings }: any) => {
	const { sensors, handlerDragEnd } = useSortableList(setPendings);
	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handlerDragEnd}>
			<Grid
				// spacing={{ xs: 1, md: 3 }}
				// columns={{ xs: 1, sm: 2, md: 4 }}
				sx={{ my: 3 }}>
				<SortableContext items={pendings} strategy={rectSortingStrategy}>
					{pendings?.map((pending: PendingListProps) => (
						<SortableItem
							title={pending.title}
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
	);
};
