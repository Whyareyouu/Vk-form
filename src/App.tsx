import { useEffect, useState } from 'react';
import { TErrors, TOption } from './types/types';
import './styles/App.css';
import {
	Button,
	Modal,
	Calendar,
	ChoseTime,
	Textarea,
	CustomSelect,
	MeetingRooms,
} from './components';
import { ActionPoints } from './ui/reducer/enums';
import { floors, meetingrooms_array, towers } from './helpers/options';
import { useFormDispatch } from './hooks/useFormDispatch';
import { useFormState } from './hooks/useFormState';
import { validator } from './ui/validator/validator';

function App() {
	const [active, setActive] = useState<boolean>(false);
	const [errors, setErrors] = useState<TErrors | null>(null);
	const dispatch = useFormDispatch();
	const state = useFormState();
	useEffect(() => {
		setErrors(validator(state));
	}, [state]);
	const handleChangeTower = (selectedOption: TOption) => {
		dispatch({ type: ActionPoints.TOWER, payload: selectedOption.value });
	};
	const handleChangeFloor = (selectedOption: TOption) => {
		dispatch({ type: ActionPoints.FLOOR, payload: selectedOption.value });
	};
	const handleChangeRoom = (selectedOption: TOption) => {
		dispatch({ type: ActionPoints.MEETINGROOM, payload: selectedOption.value });
	};
	const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (errors !== null && Object.keys(errors).length !== 0) {
			return;
		}
		console.log(JSON.stringify(state));
	};
	return (
		<form className='form' onSubmit={onSubmit}>
			<h1 className='form__title'>Форма бронирования переговорной</h1>
			<CustomSelect
				options={towers}
				onChange={handleChangeTower}
				placeholder='Выберите башню'
				error={errors?.tower}
				value={towers.find((tower) => tower.value === state.tower) || null}
			/>
			<CustomSelect
				options={floors}
				onChange={handleChangeFloor}
				placeholder='Выберите этаж'
				error={errors?.floor}
				value={floors.find((floor) => floor.value === state.floor) || null}
			/>
			<div className='book_meetingroom'>
				<Button type='button' onClick={() => setActive(true)}>
					Забронировать переговорную
				</Button>
				<span className='error'>
					{errors?.date?.endTime ||
						errors?.date?.startTime ||
						errors?.date?.date ||
						errors?.meetingroom}
				</span>
			</div>
			<Modal active={active} setActive={setActive}>
				<div className='office__body'>
					<ChoseTime
						className='office__body-chosetime'
						startTime={9}
						endTime={24}
						error={errors?.date?.endTime || errors?.date?.startTime}
						selectedStartTime={state.date.startTime}
						selectedEndTime={state.date.endTime}
					/>
					<Calendar
						selectedDate={state.date.date}
						className='office__body-calendar'
						error={errors?.date?.date}
					/>
					<MeetingRooms
						selectedRoom={state.meetingroom}
						className='office__body-meetingrooms'
						error={errors?.meetingroom}
					/>
				</div>
			</Modal>
			<div className='office__body-adaptive'>
				<ChoseTime
					className='office__body-chosetime'
					startTime={9}
					endTime={24}
					error={errors?.date?.endTime || errors?.date?.startTime}
					selectedStartTime={state.date.startTime}
					selectedEndTime={state.date.endTime}
				/>
				<Calendar
					selectedDate={state.date.date}
					className='office__body-calendar'
					error={errors?.date?.date}
				/>
				<CustomSelect
					options={meetingrooms_array}
					onChange={handleChangeRoom}
					placeholder='Выберите переговорную'
					error={errors?.meetingroom}
					value={
						meetingrooms_array.find(
							(meetingroom) => meetingroom.value === state.meetingroom
						) || null
					}
				/>
			</div>
			<Textarea
				className='comment'
				placeholder='Комментарий'
				onChange={(event) =>
					dispatch({ type: ActionPoints.COMMENT, payload: event?.target.value })
				}
				error={errors?.comment}
				value={state.comment}
			/>
			<div className='button__container'>
				<Button
					variant='primary'
					disabled={errors !== null && Object.keys(errors).length !== 0}>
					Отправить
				</Button>
				<Button
					type='button'
					variant='red'
					onClick={() => dispatch({ type: ActionPoints.CLEAR })}>
					Очистить
				</Button>
			</div>
		</form>
	);
}

export default App;
