import React, { useState } from 'react';
import { Input, SelectInput, Text } from '../../atoms';
import { Modal } from '../../molecules';
import { Controller } from 'react-hook-form';

import { status, priorities, propsModal } from './AddPendingModal.props';
import { useAddPendingModal } from './AddPendingModal.hook';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import moment from 'moment';

export function AddPendingModal(props: propsModal) {
	const { isModalOpen, onClose } = props;
	const { onSubmit, handleSubmit, control, errors } =
		useAddPendingModal(onClose);

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
			<Controller
				name={'datePicker'}
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<DatePicker
						placeholderText="Select date"
						onChange={date => field.onChange(date)}
						selected={field.value}
						minDate={moment().toDate()}
						showDisabledMonthNavigation
					/>
				)}
			/>
		</Modal>
	);
}
