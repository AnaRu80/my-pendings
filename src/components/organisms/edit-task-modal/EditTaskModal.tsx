import { memo } from 'react';
import { useAppRedux } from '../../../hooks';
import { closeModal } from '../../../store/slices';
import { Modal } from '../../molecules';
import { EditTaskForm } from './EditTaskForm';
import { useEditTaskForm } from './useEditTaskForm';

export const EditTaskModal = memo(() => {
	const { select, dispatch } = useAppRedux();
	const modal: any = select((state: any) => state.modal.modals['editTask']);
	const { id } = modal || {};
	const { onSubmit, ...formProps }: any = useEditTaskForm(id);

	const handleCloseModal = () => {
		dispatch(closeModal({ modalName: 'editTask' }));
	};

	return (
		<Modal
			open={modal}
			title="Edit Task"
			mainButtonText="Edit Task"
			mainFunction={(event: any) => onSubmit(event)}
			secondaryButtonText="Close"
			secondaryFunction={handleCloseModal}
			disableMainButton={!formProps.isFormValid}>
			<EditTaskForm {...formProps} />
		</Modal>
	);
});
