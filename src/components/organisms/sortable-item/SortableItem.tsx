import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TaskListProps } from '../../../store/slices/taskSlice';
import { Card } from '..';

import { openModal } from '../../../store/slices';
import { useAppRedux } from '../../../hooks';

export function SortableItem(props: TaskListProps) {
	const { id, description, priority, status, time, title } = props;
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id });
	const { dispatch } = useAppRedux();

	const handleOpenModal = () => {
		dispatch(openModal({ modalName: 'editTask', id }));
	};
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		marginBottom: '13px',
		touchAction: 'none',
	};

	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
			<Card
				key={id}
				id={id}
				title={title}
				description={description}
				priority={priority}
				status={status}
				time={time}
				onClick={handleOpenModal}
			/>
		</div>
	);
}
