import { SortableItem } from '../';
import { Grid } from '@mui/material';
import { TaskListProps } from '../../../store/slices/taskSlice';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { useSortableList } from './useSortableList';

export const SortableList = ({ tasks, setTasks }: any) => {
	const { sensors, handlerDragEnd } = useSortableList(setTasks);
	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handlerDragEnd}>
			<Grid sx={{ my: 3 }}>
				<SortableContext items={tasks} strategy={rectSortingStrategy}>
					{tasks?.map((task: TaskListProps) => (
						<SortableItem
							title={task.title}
							key={task.id}
							id={task.id}
							description={task.description}
							priority={task.priority}
							status={task.status}
							time={task.time}
						/>
					))}
				</SortableContext>
			</Grid>
		</DndContext>
	);
};
