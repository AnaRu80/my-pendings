import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromPendings, doneFromPendings } from '../store/slices';

export function useTodoCard(id: string) {
	const [expanded, setExpanded] = useState(false);
	const [checked, setChecked] = useState(false);

	const dispatch = useDispatch();

	const deletePending = () => dispatch(deleteFromPendings({ id }));
	const donePending = () => dispatch(doneFromPendings({ id }));

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
		donePending();
		setChecked(event.target.checked);
	};
	return {
		checked,
		deletePending,
		toggleExpanded,
		isWrapped,
		expanded,
		typographyRef,
		handleChange,
	};
}
