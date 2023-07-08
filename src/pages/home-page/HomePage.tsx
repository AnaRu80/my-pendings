import { Button } from '../../components/atoms';
import AddIcon from '@mui/icons-material/Add';

import { AddTaskModal, Footer, SortableList } from '../../components/organisms';
import { Box } from '@mui/material';
import HomePageStyles from './HomePage.styles';
import { EmptyTaskTemplate } from '../../components/molecules';
import { useHomePage } from './useHomePage.hooks';

export default function HomePage({ activeTab }: any) {
	const { handleSortDueDate, tasks, setTasks, isModalOpen, setIsModalOpen } =
		useHomePage(activeTab);

	return (
		<Box sx={HomePageStyles}>
			<Button
				text="Sort by Due Date"
				onClick={handleSortDueDate}
				sx={{ mt: 2 }}
				color="primary"
			/>
			<Box className="listContainer">
				<SortableList tasks={tasks} setTasks={setTasks} />
				{tasks.length == 0 && <EmptyTaskTemplate activeTab={activeTab} />}
				<AddTaskModal
					isModalOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
			</Box>
			<Box className="footerContainer">
				<Button
					text="Create Task"
					sx={{ mb: 1 }}
					startIcon={<AddIcon />}
					size="small"
					onClick={() => setIsModalOpen(true)}
				/>
				<Footer />
			</Box>
		</Box>
	);
}
