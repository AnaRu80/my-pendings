import React, { useState } from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { Button, Input, SelectInput, Text } from '../../atoms';
import { Modal } from '../../molecules';
import { PRIORITY, STATUS } from '../card/Card.props';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { pendingActions } from '../../../store/pending-slice';
import { useDispatch } from 'react-redux';
import { RootState } from '../../../store';
interface PrioritySelect {
	label: string;
	value: string;
}
const priorities: PrioritySelect[] = [
	{ label: 'high', value: 'high' },
	{ label: 'medium', value: 'medium' },
	{ label: 'low', value: 'low' },
];
interface StatusSelect {
	label: STATUS;
	value: string;
}
const status: StatusSelect[] = [
	{ label: 'done', value: 'done' },
	{ label: 'active', value: 'active' },
	{ label: 'deleted', value: 'deleted' },
];

interface IFormInput {
	description: string;
	priority: {} | { label: PRIORITY; value: string };
	status: {} | { label: STATUS; value: string };
}
interface propsModal {
	isModalOpen: boolean;
	onClose: () => void;
}
export function AddPendingModal(props: propsModal) {
	const { isModalOpen, onClose } = props;
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

	return (
		<Modal
			open={isModalOpen}
			title="New Pending"
			mainButtonText="Add Pending"
			mainFunction={handleSubmit(onSubmit)}
			secondaryButtonText="Close"
			secondaryFunction={onClose}>
			<Controller
				name="priority"
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<>
						<SelectInput
							label="Priority"
							error={Boolean(errors.priority)}
							options={priorities}
							{...field}
						/>
						{errors.priority && (
							<Text text="Priority is required" color="error" />
						)}
					</>
				)}
			/>
			<Controller
				name="description"
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<>
						<Input
							autoFocus
							id="description"
							label="Description"
							type="text"
							{...field}
							error={Boolean(errors.description)}
						/>
						{errors.description && (
							<Text text="Description is required" color="error" />
						)}
					</>
				)}
			/>
			<Controller
				name="status"
				control={control}
				defaultValue=""
				rules={{ required: true }}
				render={({ field }) => (
					<>
						<SelectInput
							label="Status"
							options={status}
							{...field}
							error={Boolean(errors.status)}
						/>
						{errors.description && (
							<Text text="Status is required" color="error" />
						)}
					</>
				)}
			/>
		</Modal>
	);
}
