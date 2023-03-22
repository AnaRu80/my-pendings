import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardProps, STATUS } from '../components/organisms/card/Card.props';

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
			description: 'des1',
			status: 'active',
			priority: 'high',
			time: 'time',
		},
		{
			id: '1',
			description: 'des2',
			status: 'active',
			priority: 'high',
			time: 'time',
		},
		{
			id: '2',
			description: 'des3',
			status: 'active',
			priority: 'high',
			time: 'time',
		},
	],
	totalDone: 0,
	totalActive: 0,
};
const pendingsSlice = createSlice({
	name: 'pendings',
	initialState,
	reducers: {
		addToPendings(state, action) {
			const newPendings = action.payload;
			const status: STATUS = action.payload.status;
			const existingPendingId = state.pendingsList.find(
				pending => pending.id === newPendings.id
			);
			const existingPendingDescription = state.pendingsList.find(
				pending => pending.description === newPendings.description
			);
			const existingPending = !existingPendingId && !existingPendingDescription;
			if (existingPending && status === 'active') {
				state.pendingsList.push({
					id: newPendings.id,
					priority: newPendings.priority,
					description: newPendings.description,
					status: newPendings.status,
					time: 'time',
				});
			}
			if (existingPending && status === 'done') {
				state.totalDone++;
			}
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

export const pendingActions = pendingsSlice.actions;
export default pendingsSlice;
