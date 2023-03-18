import React, { useState } from 'react';
import './App.css';
import { Button, Input, SelectInput, Text } from './components/atoms';
import { Modal } from './components/molecules';
import Card from './components/organisms/card/Card';
import moment from 'moment';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './store';

const options = [
	{ label: 'Option 1', value: 1 },
	{ label: 'Option 2', value: 2 },
	{ label: 'Option 3', value: 3 },
];

function App() {
	const [selectedValue, setSelectedValue] = useState('');
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

	const list = useAppSelector((state): any => state.pending.pendingsList);

	const handleChange = (event: any) => {
		setSelectedValue(event.target.value);
	};

	return (
		<div>
			<Text text={JSON.stringify(list)} />
			<Button text="button" />
			<Input />
			<Card
				description="descripto esta es una super preioridad porque atender"
				priority="low"
				time={moment().format('MMMM Do YYYY, h:mm:ss a')}
			/>
			<Modal
				open={false}
				title="New Pending"
				mainButtonText="ok"
				mainFunction={() => console.log('okk')}>
				<SelectInput label="Priority" options={options} />

				<Input
					autoFocus
					// margin="dense"
					id="description"
					label="Description"
					type="text"
					// fullWidth
				/>
				<SelectInput label="Status" options={options} />
			</Modal>
			<SelectInput
				label="Label"
				options={options}
				value={selectedValue}
				onChange={handleChange}
			/>
		</div>
	);
}

export default App;
