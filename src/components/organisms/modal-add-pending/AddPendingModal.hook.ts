import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { pendingActions } from '../../../store/pending-slice';
import { RootState } from '../../../store';
import { IFormInput } from './AddPendingModal.props';

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
		},
	});

	const dispatch = useDispatch();
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
	const list = useAppSelector((state): any => state.pending.pendingsList);

	const onSubmit: SubmitHandler<IFormInput> = data => {
		dispatch(
			pendingActions.addToPendings({
				id: list.length + 1,
				priority: data.priority,
				description: data.description,
				status: data.status,
			})
		);
		reset();
		onClose();
	};

	return { onSubmit, handleSubmit, control, errors };
};
