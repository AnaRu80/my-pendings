import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PendingListProps } from '../../../store/slices/pendingSlice';
import TodoCard from '../card/TodoCard';

export function SortableItem(props: PendingListProps) {
	const { id, description, priority, status, time } = props;
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: props.id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		marginBottom: '13px',
	};

	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
			<TodoCard
				key={id}
				id={id}
				title="title"
				description={description}
				priority={priority}
				status={status}
				time={time}
			/>
		</div>
	);
}
