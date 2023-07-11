import { useMemo, useState } from 'react';
import moment from 'moment';

import { CardProps } from '../../card/Card.props';
import { updateTaskbyId } from '../../../../store/slices/taskSlice';
import { RootState } from '../../../../store/store';
import { closeModal } from '../../../../store/slices';
import { useForm } from '../../../../hooks/useForm';
import { useAppRedux } from '../../../../hooks';
import { formData, formValidations } from '../helpers';

export function useEditTaskForm() {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const { select, dispatch } = useAppRedux();

	const modal = select((state: RootState) => state.modal.modals['editTask']);
	const { id } = modal || {};

	const list = select((state: RootState): CardProps[] => state.task.tasksList);

	const initialFormData = useMemo(() => {
		if (id) {
			const taskById = list.find((task: CardProps) => task.id === id);

			return {
				priority: taskById?.priority,
				title: taskById?.title,
				description: taskById?.description,
				status: taskById?.status,
				time: moment(taskById?.time),
			};
		} else {
			return formData;
		}
	}, [id]);
	const {
		title,
		priority,
		description,
		time,
		status,
		onInputChange,
		onDataChange,
		formState,
		formValidation,
		isFormValid,
		onResetForm,
	}: any = useForm(initialFormData, formValidations);

	const handleCloseModal = () => {
		onResetForm();
		setFormSubmitted(false);
		dispatch(closeModal({ modalName: 'editTask' }));
	};
	const onSubmit: (
		event: React.ChangeEvent<HTMLInputElement>
	) => void = event => {
		event.preventDefault();
		setFormSubmitted(true);
		if (!isFormValid) return;

		dispatch(
			updateTaskbyId({
				id,
				title: title,
				priority: priority,
				description: description,
				status: status,
				time: moment(time).format('D MMMM YYYY'),
			})
		);

		handleCloseModal();
	};

	return {
		formSubmitted,
		onSubmit,
		...formState,
		...formValidation,
		isFormValid,
		formState,
		onInputChange,
		onDataChange,
		modal,
		handleCloseModal,
	};
}
