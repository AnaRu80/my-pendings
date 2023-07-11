import { useState } from 'react';
import moment from 'moment';

import { PRIORITY } from '../card/Card.props';
import { addTask } from '../../../store/slices/taskSlice';
import { useAppRedux, useForm } from '../../../hooks';
import { generateRandomId } from '../../../utils';
import { closeModal } from '../../../store/slices';

const today = moment();

const formData = {
	priority: 'low',
	title: '',
	description: '',
	time: today,
};

const formValidations = {
	time: [
		(value: any) =>
			value != null
				? moment(value).format() != 'Invalid date'
					? true
					: false
				: false,
		'The time is required',
	],
	priority: [
		(value: PRIORITY) =>
			value == 'high' ? true : value == 'low' ? true : false,
		'The priority is required',
	],

	title: [(value: string) => value.length >= 1, 'The task is required'],
};
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
		onResetForm();
		setFormSubmitted(false);
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
