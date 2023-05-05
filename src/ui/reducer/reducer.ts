import { TAction, TState } from '../../types/types';
import { ActionPoints } from './enums';

export const reducer = (state: TState, action: TAction) => {
	switch (action?.type) {
		case ActionPoints.TOWER:
			return { ...state, tower: action.payload };
		case ActionPoints.MEETINGROOM:
			return { ...state, floor: action.payload };
		case ActionPoints.FLOOR:
			return { ...state, meetingroom: action.payload };
		case ActionPoints.DATE:
			return { ...state, date: action.payload };
		case ActionPoints.COMMENT:
			return { ...state, comment: action.payload };
		default:
			return state;
	}
};
