import { useDispatch, useSelector } from 'react-redux';

export const useAppRedux = () => {
	const dispatch = useDispatch();

	const dispatchAction = (action: any) => {
		dispatch(action);
	};

	const useSelectState = (selector: any): any => {
		return useSelector(selector);
	};

	return {
		dispatch: dispatchAction,
		select: useSelectState,
	};
};
