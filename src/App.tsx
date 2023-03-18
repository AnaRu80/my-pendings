import React, { useState } from 'react';
import './App.css';
import { Button, Input, SelectInput, Text } from './components/atoms';
const options = [
	{ label: 'Option 1', value: 1 },
	{ label: 'Option 2', value: 2 },
	{ label: 'Option 3', value: 3 },
];
function App() {
	const [selectedValue, setSelectedValue] = useState('');

	const handleChange = (event: any) => {
		setSelectedValue(event.target.value);
	};
	return (
		<div>
			<Text text=" esto es un text" />
			<Button text="button" />
			<Input />
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
