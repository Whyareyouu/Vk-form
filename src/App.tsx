import { useState } from 'react';
import { TOption } from './types/types';
import './App.css';
import { Button, Modal } from './components';
import { ActionPoints } from './ui/reducer/enums';
import { CustomSelect } from './components/CustomSelect/CustomSelect';
import { floors, towers } from './helpers/options';
import Calendar from './components/Calendar/Calendar';
import ChoseTime from './components/ChoseTime/ChoseTime';
import { Meetingrooms } from './components/MeetingRooms/Meetingrooms';
import { useFormDispatch } from './hooks/useFormDispatch';
import { useFormState } from './hooks/useFormState';

function App() {
	const [active, setActive] = useState<boolean>(false);
	const dispatch = useFormDispatch();
	const state = useFormState();
	const handleChangeTower = (selectedOption: TOption) => {
		dispatch({ type: ActionPoints.TOWER, payload: selectedOption.value });
	};
	const handleChangeFloor = (selectedOption: TOption) => {
		dispatch({ type: ActionPoints.FLOOR, payload: selectedOption.value });
	};
	const onSubmit = () => {
		console.log(state);
	};
	return (
		<form className='Form' onSubmit={onSubmit}>
			<CustomSelect
				options={towers}
				onChange={handleChangeTower}
				placeholder='Выберите башню'
			/>
			<CustomSelect
				options={floors}
				onChange={handleChangeFloor}
				placeholder='Выберите этаж'
			/>
			<Button type='button' onClick={() => setActive(true)}>
				Забронировать переговорку
			</Button>
			<Modal active={active} setActive={setActive}>
				<div className='office__body'>
					<ChoseTime className='office__body-chosetime' />
					<Calendar className='office__body-calendar' />
					<Meetingrooms className='office__body-meetingrooms' />
				</div>
			</Modal>
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
