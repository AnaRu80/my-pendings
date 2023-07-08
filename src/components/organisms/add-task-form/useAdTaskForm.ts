import { useState } from 'react';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import moment from 'moment';

import { PRIORITY } from '../card/Card.props';
import { addTask } from '../../../store/slices/taskSlice';
import { RootState } from '../../../store/store';
import { useForm } from '../../../hooks';
import { generateRandomId } from '../../../utils';

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
export function useAddTaskForm(onClose: any) {
	const [formSubmitted, setFormSubmitted] = useState(false);

	const dispatch = useDispatch();
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
	const list = useAppSelector((state): any => state.task.tasksList);
	const {
		title,
		priority,
		description,
		status,
		time,
		onInputChange,
		onDataChange,
		formState,
		formValidation,
		isFormValid,
		onResetForm,
	}: any = useForm(formData, formValidations);

	const onSubmit: (event: any) => void = event => {
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
		onClose();
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
	};
}
