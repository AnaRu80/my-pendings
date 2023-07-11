import React, { memo } from 'react';
import { useAppRedux } from '../../../hooks';
import { closeModal } from '../../../store/slices';
import { RootState } from '../../../store/store';
import { Modal } from '../../molecules';
import { EditTaskForm } from './EditTaskForm';
import { useEditTaskForm } from './useEditTaskForm';

export const EditTaskModal = memo(() => {
	const { select, dispatch } = useAppRedux();
	const modal = select((state: RootState) => state.modal.modals['editTask']);
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
			mainFunction={(event: React.ChangeEvent<HTMLInputElement>) =>
				onSubmit(event)
			}
			secondaryButtonText="Close"
			secondaryFunction={handleCloseModal}
			disableMainButton={!formProps.isFormValid}>
			<EditTaskForm {...formProps} />
		</Modal>
	);
});
