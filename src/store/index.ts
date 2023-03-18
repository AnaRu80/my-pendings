import { configureStore } from '@reduxjs/toolkit';
import pendingSlice from './pending-slice';

const store = configureStore({
	reducer: {
		pending: pendingSlice.reducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
