import { createSlice } from '@reduxjs/toolkit';
import { CardProps } from '../../components/organisms/card/Card.props';

export interface TaskListProps extends CardProps {}
interface TaskInterface {
	tasksList: TaskListProps[];
	totalDone: number;
	totalActive: number;
}
const initialState: TaskInterface = {
	tasksList: [
		{
			id: '0',
			title: 'Make the Bed',
			status: 'completed',
			priority: 'high',
			time: '21 March 2023',
		},
		{
			id: '1',
			title: 'Buy Dog Food',

			description: 'only 4 Kg because it last long',
			status: 'active',
			priority: 'low',
			time: '23 July 2023',
		},
		{
			id: '2',
			title: 'Go to the Vet',
			status: 'active',
			priority: 'high',
			time: '21 July 2023',
		},
		{
			id: '3',
			title: 'Finish HomeWork',
			description: 'Ir al veterinario',
			status: 'active',
			priority: 'low',
			time: '22 March 2023',
		},
	],
	totalDone: 0,
	totalActive: 0,
};
export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask(state, action) {
			const newTask = action.payload;

			state.tasksList.push({
				title: newTask.title,
				id: newTask.id,
				priority: newTask.priority,
				description: newTask.description,
				status: newTask.status,
				time: newTask.time,
			});
		},
		deleteTaskbyId(state: TaskInterface, action) {
			const id = action.payload.id;
			const existingTask = state.tasksList.find(task => task.id === id);
			if (existingTask) {
				state.tasksList = state.tasksList.filter(task => task.id !== id);
			}
		},
		toggleCompleteTask(state, action) {
			const id = action.payload.id;
			const existingTask = state.tasksList.find(task => task.id === id);
			if (existingTask) {
				const task = state.tasksList.find(task => task.id === id);
				if (task) {
					task.status = task.status == 'completed' ? 'active' : 'completed';
					state.totalDone++;
				}
			}
		},
	},
});

export const { addTask, deleteTaskbyId, toggleCompleteTask } =
	tasksSlice.actions;
