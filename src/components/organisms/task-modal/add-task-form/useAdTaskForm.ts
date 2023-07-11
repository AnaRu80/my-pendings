import { useState } from 'react';
import moment from 'moment';

import { addTask } from '../../../../store/slices/taskSlice';
import { useAppRedux, useForm } from '../../../../hooks';
import { generateRandomId } from '../../../../utils';
import { closeModal } from '../../../../store/slices';
import { formData, formValidations } from '../helpers';

export function useAddTaskForm() {
	const { select, dispatch } = useAppRedux();

	const [formSubmitted, setFormSubmitted] = useState(false);
	const isModalOpen = select((state: any) => state.modal.modals['addTask']);
	const {
		title,
		priority,
		description,
		time,
		onInputChange,
		onDataChange,
		formState,
		formValidation,
		isFormValid,
		onResetForm,
	}: any = useForm(formData, formValidations);

	const handleCloseModal = () => {
		onResetForm();
		setFormSubmitted(false);
		dispatch(closeModal({ modalName: 'addTask' }));
	};
	const onSubmit: (
		event: React.ChangeEvent<HTMLInputElement>
	) => void = event => {
		event.preventDefault();
		setFormSubmitted(true);

		if (!isFormValid) return;
		const id = generateRandomId();
		dispatch(
			addTask({
				id,
				title: title,
				priority: priority,
				description: description,
				status: 'active',
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
		isModalOpen,
		handleCloseModal,
	};
}
