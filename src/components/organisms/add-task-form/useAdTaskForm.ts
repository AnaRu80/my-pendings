import { useState } from 'react';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import moment from 'moment';

import { PRIORITY } from '../card/Card.props';
import { addToPendings } from '../../../store/slices/pendingSlice';
import { RootState } from '../../../store/store';
import { useForm } from '../../../hooks';

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
	const list = useAppSelector((state): any => state.pending.pendingsList);
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

		console.log('forma', formState, formValidation);
		if (!isFormValid) return;
		console.log('forma2', list.length, formValidation);
		dispatch(
			addToPendings({
				id: list.length + 1,
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
