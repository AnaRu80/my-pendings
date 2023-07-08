import { Box } from '@mui/material';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '../../../store/store';
import { Text } from '../../atoms';
import FooterStyles from './Footer.styles';

export function Footer() {
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
	const list = useAppSelector((state): any => state.task.tasksList);
	const totalActive = list.filter((list: any) => list.status == 'active');
	const totalCompleted = list.filter((list: any) => list.status == 'completed');
	return (
		<Box sx={FooterStyles}>
			<Text text={`Active: ${totalActive.length}`} />
			<Text text={`Done: ${totalCompleted.length}`} />
		</Box>
	);
}
