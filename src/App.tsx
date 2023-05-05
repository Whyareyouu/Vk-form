import { useReducer, useState } from 'react';
import { reducer } from './ui/reducer/reducer';
import { TState } from './types/types';
import './App.css';
import { Button, Modal } from './components';
import { ActionPoints } from './ui/reducer/enums';
import DatePicker from './components/DatePicker/DatePicker';
import Select from 'react-select';
import { CustomSelect } from './components/CustomSelect/CustomSelect';
import { towers } from './helpers/options';
const initialState: TState = {
	tower: '',
	floor: '',
	meetingroom: '',
	date: '',
	comment: '',
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [active, setActive] = useState<boolean>(false);
	const onSubmit = () => {
		console.log(state);
	};
	return (
		<form className='Form' onSubmit={onSubmit}>
			<CustomSelect options={towers} onChange={() => console.log()} />
			<select
				name=''
				id=''
				value={state.tower}
				onChange={(e) =>
					dispatch({ type: ActionPoints.TOWER, payload: e.target.value })
				}>
				<option value='A'>A</option>
				<option value='B'>B</option>
			</select>
			<select name='' id=''>
				<option value=''>3</option>
				<option value=''>4</option>
			</select>
			<Button type='button' onClick={() => setActive(true)}>
				Выбрать дату и время
			</Button>
			<Modal active={active} setActive={setActive}>
				<DatePicker />
			</Modal>
			<input
				type='date'
				value={state.date}
				onChange={(e) =>
					dispatch({ type: ActionPoints.DATE, payload: e.target.value })
				}
			/>
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
