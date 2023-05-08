import { TAction, TState } from '../../types/types';
import { initialState } from '../context/context';
import { ActionPoints } from './enums';

export const reducer = (state: TState, action: TAction) => {
	switch (action?.type) {
		case ActionPoints.TOWER:
			return { ...state, tower: action.payload };
		case ActionPoints.FLOOR:
			return { ...state, floor: action.payload };
		case ActionPoints.MEETINGROOM:
			return { ...state, meetingroom: action.payload };
		case ActionPoints.STARTTIME:
			return { ...state, date: { ...state.date, startTime: action.payload } };
		case ActionPoints.ENDTIME:
			return { ...state, date: { ...state.date, endTime: action.payload } };
		case ActionPoints.DATE:
			return { ...state, date: { ...state.date, date: action.payload } };
		case ActionPoints.COMMENT:
			return { ...state, comment: action.payload };
		case ActionPoints.CLEAR:
			return initialState;
		default:
			return state;
	}
};
