import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskbyId, toggleCompleteTask } from '../../../store/slices';

export function useCard(id: string) {
	const [expanded, setExpanded] = useState(false);

	const dispatch = useDispatch();

	const deleteTask = () => dispatch(deleteTaskbyId({ id }));
	const completeTask = () => dispatch(toggleCompleteTask({ id }));

	const toggleExpanded = () => {
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
	}, []);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
