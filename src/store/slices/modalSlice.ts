import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
	modals: { [key: string]: { isOpen: boolean; id: string | undefined } };
}
interface OpenModalPayload {
	modalName: string;
	id?: string | undefined;
}

interface CloseModalPayload {
	modalName: string;
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState: { modals: {} } as ModalState,
	reducers: {
		openModal: (state, action: PayloadAction<OpenModalPayload>) => {
			const { modalName, id } = action.payload;
			state.modals[modalName] = {
				isOpen: true,
				id,
			};
		},
		closeModal: (state, action: PayloadAction<CloseModalPayload>) => {
			const { modalName } = action.payload;
			delete state.modals[modalName];
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;
