import { openModal } from '../../../store/slices';
import { useAppRedux } from '../../../hooks';
import { RootState } from '../../../store/store';
import { CardProps } from '../card/Card.props';

export function useActionButton() {
	const { select, dispatch } = useAppRedux();

	const list = select((state: RootState) => state.task.tasksList);
	const totalActive = list.filter((list: CardProps) => list.status == 'active');
	const totalCompleted = list.filter(
		(list: CardProps) => list.status == 'completed'
	);

	const handleOpenModal = () => {
		dispatch(openModal({ modalName: 'addTask' }));
	};
	return {
		totalActive,
		totalCompleted,
		isEmpty: list.length < 2,
		handleOpenModal,
	};
}
