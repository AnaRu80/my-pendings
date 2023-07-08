import { Modal } from '../../molecules';
import { propsModal } from './AddTaskModal.props';
import { AddTaskForm } from './AddTaskForm';
import { useAddTaskForm } from './useAdTaskForm';

export function AddTaskModal(props: propsModal) {
	const { isModalOpen, onClose } = props;
	const { onSubmit, ...formProps }: any = useAddTaskForm(onClose);
	return (
		<Modal
			open={isModalOpen}
			title="New Task"
			mainButtonText="Add Task"
			mainFunction={(event: any) => onSubmit(event)}
			secondaryButtonText="Close"
			secondaryFunction={onClose}
			disableMainButton={!formProps.isFormValid}>
			<AddTaskForm {...formProps} />
		</Modal>
	);
}
