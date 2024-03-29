import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskbyId, toggleCompleteTask } from '../../../store/slices';

export function useCard(id: string, description: string | undefined) {
	const [expanded, setExpanded] = useState(false);

	const dispatch = useDispatch();

	const deleteTask = (
		event: React.BaseSyntheticEvent<Event, EventTarget & Element, EventTarget>
	) => {
		event.stopPropagation();
		dispatch(deleteTaskbyId({ id }));
	};
	const completeTask = () => dispatch(toggleCompleteTask({ id }));

	const toggleExpanded = (event: any) => {
		event.stopPropagation();

		setExpanded(!expanded);
	};

	const typographyRef = useRef<HTMLDivElement>(null);
	const [isWrapped, setIsWrapped] = useState(false);
	useEffect(() => {
		const typographyElement = typographyRef.current;
		if (typographyElement) {
			setIsWrapped(
				typographyElement.scrollWidth > typographyElement.clientWidth
			);
		}
	}, [description]);

	const handleChange = (
		event: React.BaseSyntheticEvent<Event, EventTarget & Element, EventTarget>
	) => {
		event.stopPropagation();
		completeTask();
	};
	return {
		deleteTask,
		toggleExpanded,
		isWrapped,
		expanded,
		typographyRef,
		handleChange,
	};
}
