import { TErrors, TState } from '../../types/types';

export const validator = (state: TState): TErrors => {
	let errors: TErrors = {};
	if (!state.tower) {
		errors.tower = 'Tower is required';
	}

	if (!state.floor) {
		errors.floor = 'Floor is required';
	}

	if (!state.meetingroom) {
		errors.meetingroom = 'Meeting room is required';
	}

	if (!state.date.startTime) {
		errors.date = { ...errors.date, startTime: 'Start time is required' };
	}

	if (!state.date.endTime) {
		errors.date = { ...errors.date, endTime: 'End time is required' };
	}
	if (
		+state.date.startTime.replace(':00', '') >=
		+state.date.endTime.replace(':00', '')
	) {
		errors.date = {
			...errors.date,
			endTime: 'Конечное время не может меньше начального',
		};
	}
	if (!state.date.date) {
		errors.date = { ...errors.date, date: 'Date is required' };
	}
	if (!state.comment) {
		errors.comment = 'Comment is required';
	}
	return errors;
};
