import { openModal } from '../../../store/slices';
import { useAppRedux } from '../../../hooks';

export function useActionButton() {
	const { select, dispatch } = useAppRedux();

	const list = select((state: any) => state.task.tasksList);
	const totalActive = list.filter((list: any) => list.status == 'active');
	const totalCompleted = list.filter((list: any) => list.status == 'completed');

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
