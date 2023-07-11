import {
	AddTaskModal,
	ActionButtons,
	SortableList,
} from '../../components/organisms';
import { Box } from '@mui/material';
import HomePageStyles from './HomePage.styles';
import { EmptyTaskTemplate } from '../../components/molecules';
import { useHomePage } from './useHomePage.hooks';
import { EditTaskModal } from '../../components/organisms/edit-task-modal/EditTaskModal';

export default function HomePage({ activeTab, appBarHeight }: any) {
	const { handleSortDueDate, tasks, setTasks } = useHomePage(activeTab);

	const sxStyles = [
		...(Array.isArray(HomePageStyles) ? HomePageStyles : [HomePageStyles]),
		{ marginTop: `${appBarHeight + 16}px` },
	];
	return (
		<Box sx={sxStyles}>
			<ActionButtons handleSortDueDate={handleSortDueDate} />
			<Box className="listContainer">
				<SortableList tasks={tasks} setTasks={setTasks} />
				{tasks.length == 0 && <EmptyTaskTemplate activeTab={activeTab} />}
				<AddTaskModal />
				<EditTaskModal />
			</Box>
		</Box>
	);
}
