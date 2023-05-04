import { TAction, TState } from '../../types/types';
import { COMMENT, DATE, FLOOR, MEETINGROOM, TOWER } from './constants';

export const reducer = (state: TState, action: TAction) => {
	switch (action?.type) {
		case TOWER:
			return { ...state, tower: action.payload.tower };
		case FLOOR:
			return { ...state, floor: action.payload.floor };
		case MEETINGROOM:
			return { ...state, meetingroom: action.payload.meetingroom };
		case DATE:
			return { ...state, date: action.payload.date };
		case COMMENT:
			return { ...state, comment: action.payload.comment };
		default:
			return state;
	}
};
