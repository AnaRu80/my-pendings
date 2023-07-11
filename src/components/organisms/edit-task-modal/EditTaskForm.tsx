import { Grid, TextField } from '@mui/material';
import { SelectInput } from '../../atoms';
import { priorities } from './EditTaskModal.props';
import { DatePicker } from '../../molecules';

export const EditTaskForm = (props: any) => {
	const {
		formSubmitted,
		priority,
		title,
		description,
		time,
		onInputChange,
		onDataChange,
		priorityValid,
		descriptionValid,
		timeValid,
		titleValid,
	}: any = props;

	return (
		<Grid container>
			<Grid item xs={12} sx={{ mt: 2 }}>
				<SelectInput
					label="Priority"
					placeholder="priority"
					options={priorities}
					name="priority"
					value={priority}
					onChange={onInputChange}
					helperText="This select is required"
					error={!!priorityValid && formSubmitted}
				/>

				<TextField
					label="Task"
					type="text"
					placeholder="Task"
					inputProps={{ maxLength: 25 }}
					fullWidth
					name="title"
					value={title}
					onChange={onInputChange}
					error={!!titleValid && formSubmitted}
					helperText={!!titleValid && formSubmitted && titleValid}
				/>
			</Grid>
			<Grid item xs={12} sx={{ mt: 2 }}>
				<TextField
					label="Description"
					type="text"
					placeholder="Description"
					fullWidth
					name="description"
					value={description}
					onChange={onInputChange}
					error={!!descriptionValid && formSubmitted}
					helperText={!!descriptionValid && formSubmitted && descriptionValid}
				/>
			</Grid>
			<Grid item xs={12} sx={{ mt: 2 }}>
				<DatePicker
					onDataChange={onDataChange}
					time={time}
					timeValid={!!timeValid && formSubmitted}
					helperText={!!timeValid && formSubmitted && timeValid}
				/>
			</Grid>
		</Grid>
	);
};
