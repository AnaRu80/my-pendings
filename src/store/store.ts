import { configureStore } from '@reduxjs/toolkit';
import { themeSlice, tasksSlice, modalSlice } from './slices';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Import the default local storage engine

const taskPersistConfig = {
	key: 'tasks',
	storage,
};

const themePersistConfig = {
	key: 'theme',
	storage,
};

const persistedTaskReducer = persistReducer(
	taskPersistConfig,
	tasksSlice.reducer
);
const persistedThemeReducer = persistReducer(
	themePersistConfig,
	themeSlice.reducer
);

const store = configureStore({
	reducer: {
		task: persistedTaskReducer,
		theme: persistedThemeReducer,
		modal: modalSlice.reducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
export const persistor = persistStore(store);
