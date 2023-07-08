import {
	useSensor,
	useSensors,
	PointerSensor,
	MouseSensor,
	TouchSensor,
	KeyboardSensor,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

export const useSortableList = (setTasks: any) => {
	const sensors = useSensors(
		useSensor(MouseSensor, {
			activationConstraint: {
				distance: 8,
			},
		}),
		useSensor(TouchSensor, {
			activationConstraint: {
				delay: 300,
				tolerance: 8,
			},
		}),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 8,
			},
		})
	);

	function handlerDragEnd(event: any) {
		const { active, over } = event;
		if (active.id !== over.id) {
			setTasks((items: any) => {
				const oldIndex = items.findIndex((item: any) => item.id === active.id);
				const newIndex = items.findIndex((item: any) => item.id === over.id);
				return arrayMove(items, oldIndex, newIndex);
			});
		}
	}
	return { sensors, handlerDragEnd };
};
