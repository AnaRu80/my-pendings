import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { addToPendings } from '../../../store/slices/pendingSlice';
import { RootState } from '../../../store/store';
import { IFormInput } from './AddPendingModal.props';
import moment from 'moment';

export const useAddPendingModal = (onClose: any) => {
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			description: '',
			priority: '',
			status: '',
			datePicker: new Date(),
		},
	});

	const dispatch = useDispatch();
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
	const list = useAppSelector((state): any => state.pending.pendingsList);

	const onSubmit: SubmitHandler<IFormInput> = data => {
		dispatch(
			addToPendings({
				id: list.length + 1,
				priority: data.priority,
				description: data.description,
				status: data.status,
				time: moment(data.datePicker).format('D MMMM YYYY'),
			})
		);
		reset();
		onClose();
	};

	return { onSubmit, handleSubmit, control, errors };
};
