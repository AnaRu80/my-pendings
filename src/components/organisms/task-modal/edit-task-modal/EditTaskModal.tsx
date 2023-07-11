import React, { memo } from 'react';
import { Modal } from '../../../molecules';
import { TaskForm } from '../TaskForm';
import { useEditTaskForm } from './useEditTaskForm';

export const EditTaskModal = memo(() => {
	const { onSubmit, modal, handleCloseModal, ...formProps }: any =
		useEditTaskForm();

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
			<TaskForm {...formProps} />
		</Modal>
	);
});
