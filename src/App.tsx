import React, { useReducer } from 'react';
import { reducer } from './ui/reducer/reducer';
import { TState } from './types/types';
import './App.css';
import { Button } from './components';
const initialState: TState = {
	tower: '',
	floor: '',
	meetingroom: '',
	date: '',
	comment: '',
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const onSubmit = () => {
		console.log(state);
	};
	return (
		<form className='Form' onSubmit={onSubmit}>
			<select name='' id=''>
				<option value=''>A</option>
				<option value=''>B</option>
			</select>
			<select name='' id=''>
				<option value=''>3</option>
				<option value=''>4</option>
			</select>
			<input type='date' />
			<textarea name='' id=''></textarea>
			<div>
				<Button variant='green'>Отправить</Button>
				<Button type='button' variant='red'>
					Очистить
				</Button>
			</div>
		</form>
	);
}

export default App;
