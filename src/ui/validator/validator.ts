import { TErrors, TState } from '../../types/types';

export const validator = (state: TState): TErrors => {
	let errors: TErrors = {};
	if (!state.tower) {
		errors.tower = 'Выберите башню';
	}

	if (!state.floor) {
		errors.floor = 'Выберите этаж';
	}

	if (!state.meetingroom) {
		errors.meetingroom = 'Выберите переговоную';
	}
	if (
		+state.date.startTime.replace(':00', '') >=
		+state.date.endTime.replace(':00', '')
	) {
		errors.date = {
			...errors.date,
			endTime: 'Конечное время не должно быть меньше начального',
		};
	}
	if (!state.date.endTime) {
		errors.date = { ...errors.date, endTime: 'Выберите конечное время' };
	}
	if (!state.date.startTime) {
		errors.date = { ...errors.date, startTime: 'Выберите начальное время' };
	}
	if (!state.date.date) {
		errors.date = { ...errors.date, date: 'Выберите дату' };
	}
	if (!state.comment) {
		errors.comment = 'Оставьте комментарий';
	}
	return errors;
};
