import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { Button, Text } from '../../atoms';
import ActionButtonsStyles from './ActionButtons.styles';
import { ActionButtonsProps } from './ActionButtons.props';
import { useActionButton } from './useActionButton.hook';

export function ActionButtons({ handleSortDueDate }: ActionButtonsProps) {
	const { totalActive, totalCompleted, isEmpty, handleOpenModal } =
		useActionButton();
	return (
		<>
			<Box sx={ActionButtonsStyles}>
				<Button
					text="Sort by Due Date"
					onClick={handleSortDueDate}
					color="primary"
					disabled={isEmpty}
				/>
				<Button
					text="Create Task"
					startIcon={<AddIcon />}
					onClick={handleOpenModal}
				/>
			</Box>
			<Box sx={ActionButtonsStyles}>
				<Text text={`Active: ${totalActive.length}`} />
				<Text text={`Done: ${totalCompleted.length}`} />
			</Box>
		</>
	);
}
