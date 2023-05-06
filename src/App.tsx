import { useState } from "react";
import { TOption } from "./types/types";
import "./App.css";
import { Button, Modal } from "./components";
import { ActionPoints } from "./ui/reducer/enums";
import { CustomSelect } from "./components/CustomSelect/CustomSelect";
import { floors, towers } from "./helpers/options";
import Calendar from "./components/Calendar/Calendar";
import ChoseTime from "./components/ChoseTime/ChoseTime";
import { useFormDispatch } from "./hooks/useFormDispatch";
import { useFormState } from "./hooks/useFormState";
import { Textarea } from "./components/Textarea/Textarea";
import Meetingrooms from "./components/MeetingRooms/Meetingrooms";

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
		<form className="form" onSubmit={onSubmit}>
			<h1 className="form__title">Форма бронирования переговорной</h1>
			<CustomSelect
				options={towers}
				onChange={handleChangeTower}
				placeholder="Выберите башню"
			/>
			<CustomSelect
				options={floors}
				onChange={handleChangeFloor}
				placeholder="Выберите этаж"
			/>
			<Button type="button" onClick={() => setActive(true)}>
				Забронировать переговорную
			</Button>
			<Modal active={active} setActive={setActive}>
				<div className="office__body">
					<ChoseTime
						className="office__body-chosetime"
						startTime={9}
						endTime={24}
					/>
					<Calendar className="office__body-calendar" />
					<Meetingrooms className="office__body-meetingrooms" />
				</div>
			</Modal>
			<Textarea
				className="comment"
				placeholder="Комментарий"
				onChange={(event) =>
					dispatch({ type: ActionPoints.COMMENT, payload: event?.target.value })
				}
			/>
			<div className="button__container">
				<Button variant="primary">Отправить</Button>
				<Button type="button" variant="error">
					Очистить
				</Button>
			</div>
		</form>
	);
}

export default App;
