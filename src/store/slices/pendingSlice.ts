import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardProps, STATUS } from '../../components/organisms/card/Card.props';

export interface PendingListProps extends CardProps {}
interface PendingsInterface {
	pendingsList: PendingListProps[];
	totalDone: number;
	totalActive: number;
}
const initialState: PendingsInterface = {
	pendingsList: [
		{
			id: '0',
			title: 'Make the Bed',
			status: 'active',
			priority: 'high',
			time: '21 July 2023',
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
export const pendingsSlice = createSlice({
	name: 'pendings',
	initialState,
	reducers: {
		addToPendings(state, action) {
			const newPendings = action.payload;
			// const status: STATUS = action.payload.status;
			// const existingPendingId = state.pendingsList.find(
			// 	pending => pending.id === newPendings.id
			// );
			// const existingPendingDescription = state.pendingsList.find(
			// 	pending => pending.description === newPendings.description
			// );
			// const existingPending = !existingPendingId && !existingPendingDescription;
			// if (existingPending && status === 'active') {
			state.pendingsList.push({
				title: newPendings.title,
				id: newPendings.id,
				priority: newPendings.priority,
				description: newPendings.description,
				status: newPendings.status,
				time: newPendings.time,
			});
			// }
			// if (existingPending && status === 'done') {
			// 	state.totalDone++;
			// }
		},
		deleteFromPendings(state: PendingsInterface, action) {
			const id = action.payload.id;
			const existingPending = state.pendingsList.find(
				pending => pending.id === id
			);
			if (existingPending) {
				state.pendingsList = state.pendingsList.filter(
					pending => pending.id !== id
				);
			}
		},
		doneFromPendings(state, action) {
			const id = action.payload.id;
			const existingPending = state.pendingsList.find(
				pending => pending.id === id
			);
			if (existingPending) {
				state.pendingsList = state.pendingsList.filter(
					pending => pending.id !== id
				);
			}
			state.totalDone++;
		},
	},
});

export const { addToPendings, deleteFromPendings, doneFromPendings } =
	pendingsSlice.actions;
