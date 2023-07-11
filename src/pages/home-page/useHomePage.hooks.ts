import { useState, useMemo, useEffect } from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { CardProps } from '../../components/organisms/card/Card.props';
import type { RootState } from '../../store/store';

export function useHomePage(activeTab: string) {
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

	const list = useAppSelector((state): CardProps[] => state.task.tasksList);
	const [tasks, setTasks] = useState<CardProps[]>(list);
	useMemo(() => setTasks(list), [list]);

	useEffect(() => {
		let tasksByTab;
		switch (activeTab) {
			case 'all':
				setTasks(list);
				break;

			case 'active':
				tasksByTab = list.filter((task: CardProps) => task.status == activeTab);
				setTasks(tasksByTab);
				break;
			case 'completed':
				tasksByTab = list.filter((task: CardProps) => task.status == activeTab);
				setTasks(tasksByTab);
				break;

			default:
				setTasks(list);

				break;
		}
	}, [activeTab, list]);

	function handleSortDueDate() {
		const tasksSort = [...tasks].sort((task1, task2) => {
			const date1: any = new Date(task1.time);
			const date2: any = new Date(task2.time);
			return date1 - date2;
		});
		setTasks(tasksSort);
	}

	return {
		handleSortDueDate,
		tasks,
		setTasks,
	};
}
