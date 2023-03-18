import React, { useState } from 'react';
import './App.css';
import { Text } from './components/atoms';
import moment from 'moment';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import type { RootState } from './store';
import { Card, AddCard, AddPendingModal, Footer } from './components/organisms';
import { Box, Grid, ThemeProvider } from '@mui/material';
import { PendingListProps } from './store/pending-slice';
import { theme } from './Theme/theme';

function App() {
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const list = useAppSelector((state): any => state.pending.pendingsList);
	const [listPending, setListPending] = useState(list);

	function handleDragOnEnd(result: any) {
		if (list) {
			const items = Array.from(list);
			const [reorderedItem] = items.splice(result.source.index, 1);
			items.splice(result.destination.index, 0, reorderedItem);
			setListPending(items);
		}
	}
	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					margin: '5vh',
					height: '90vh',
					display: 'flex',
					flexDirection: 'column',
				}}>
				<DragDropContext onDragEnd={handleDragOnEnd}>
					<Droppable droppableId="pendings">
						{provided => (
							<div {...provided.droppableProps} {...provided.innerRef}>
								<Grid
									container
									spacing={{ xs: 2, md: 3 }}
									columns={{ xs: 1, sm: 2, md: 4 }}>
									<AddCard openModal={() => setIsModalOpen(true)} />
									{listPending?.map((pending: any, index: any) => (
										<Draggable
											key={pending.id}
											draggableId={pending.id}
											index={index}>
											{(provided): any => (
												<div
													ref={provided.innerRef}
													{...provided.draggableProps}
													{...provided.dragHandleProps}>
													<Card
														id={pending.id}
														description={pending.description}
														priority={pending.priority}
														status={pending.status}
														time={moment().format('MMMM Do YYYY, h:mm:ss a')}
													/>
												</div>
											)}
										</Draggable>
									))}
								</Grid>
							</div>
						)}
					</Droppable>
				</DragDropContext>
				{list.length == 0 && (
					<Text
						variant="h2"
						color={'black'}
						text="You don't have active pendings"
					/>
				)}
				<AddPendingModal
					isModalOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
				<Footer />
			</Box>
		</ThemeProvider>
	);
}

export default App;
