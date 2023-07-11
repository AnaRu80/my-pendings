import { Modal } from '../../molecules';
import { AddTaskForm } from './AddTaskForm';
import { useAddTaskForm } from './useAdTaskForm';

export function AddTaskModal() {
	const { onSubmit, isModalOpen, handleCloseModal, ...formProps }: any =
		useAddTaskForm();
	return (
		<Modal
			open={isModalOpen}
			title="New Task"
			mainButtonText="Add Task"
			mainFunction={(event: any) => onSubmit(event)}
			secondaryButtonText="Close"
			secondaryFunction={handleCloseModal}
			disableMainButton={!formProps.isFormValid}>
			<AddTaskForm {...formProps} />
		</Modal>
	);
}
