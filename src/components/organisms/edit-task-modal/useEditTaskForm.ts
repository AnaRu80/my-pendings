import { useMemo, useState } from 'react';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import moment, { Moment } from 'moment';

import { CardProps, PRIORITY } from '../card/Card.props';
import { updateTaskbyId } from '../../../store/slices/taskSlice';
import { RootState } from '../../../store/store';
import { closeModal } from '../../../store/slices';
import { useForm } from '../../../hooks/useForm';

const today = moment();

const formData = {
	priority: '',
	title: '',
	description: '',
	status: '',
	time: today,
};

const formValidations = {
	time: [
		(value: Moment) =>
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
export function useEditTaskForm(id: string | undefined) {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const modal = useSelector((state: RootState) => state.modal);

	const dispatch = useDispatch();
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
	const list = useAppSelector((state): CardProps[] => state.task.tasksList);

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
		...modal,
		handleCloseModal,
	};
}
