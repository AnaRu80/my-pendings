import { configureStore } from '@reduxjs/toolkit';
import { themeSlice, tasksSlice } from './slices';
const store = configureStore({
	reducer: {
		task: tasksSlice.reducer,
		theme: themeSlice.reducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
