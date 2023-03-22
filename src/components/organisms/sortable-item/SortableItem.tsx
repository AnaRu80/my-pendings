import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card } from '..';
import { PendingListProps } from '../../../store/pending-slice';

export function SortableItem(props: PendingListProps) {
	const { id, description, priority, status, time } = props;
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: props.id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
			<Card
				key={id}
				id={id}
				description={description}
				priority={priority}
				status={status}
				time={time}
			/>{' '}
		</div>
	);
}
