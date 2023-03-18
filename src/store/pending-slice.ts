import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardProps } from '../components/organisms/card/Card.props';

export interface PendingListProps extends CardProps {}
interface PendingsInterface {
	pendingsList: PendingListProps[];
	totalDone: number;
	totalDeleted: number;
}
const initialState: PendingsInterface = {
	pendingsList: [
		{
			id: 0,
			priority: 'high',
			description: 'des1',
			status: 'done',
			time: 'time',
		},
	],
	totalDone: 0,
	totalDeleted: 0,
};
const pendingsSlice = createSlice({
	name: 'pendings',
	initialState,
	reducers: {
		addToPendings(state, action) {
			const newPendings = action.payload;
			console.log('new', newPendings);
			const existingPending = state.pendingsList.find(
				pending => pending.id === newPendings.id
			);
			const existingPendingDescription = state.pendingsList.find(
				pending => pending.description === newPendings.description
			);
			// if (!existingPending && !existingPendingDescription) {
			state.pendingsList.push({
				id: newPendings.id,
				priority: newPendings.priority,
				description: newPendings.description,
				status: newPendings.status,
				time: 'time',
			});
			// }
		},
		deleteFromPendings(state: PendingsInterface, action) {
			const id = action.payload;
			const existingPending = state.pendingsList.find(
				pending => pending.id === id
			);
			if (existingPending) {
				state.pendingsList = state.pendingsList.filter(
					pending => pending.id !== id
				);
			}
			state.totalDeleted++;
		},
		doneFromPendings(state, action) {
			const id = action.payload;
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

export const pendingActions = pendingsSlice.actions;
export default pendingsSlice;
