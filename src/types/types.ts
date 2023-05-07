export type TAction =
	| { type: 'setTower'; payload: string }
	| { type: 'setFloor'; payload: string }
	| { type: 'setMeetingRoom'; payload: string }
	| { type: 'setStartTime'; payload: string }
	| { type: 'setEndTime'; payload: string }
	| { type: 'setDate'; payload: string | Date }
	| { type: 'setComment'; payload: string }
	| { type: 'setClear' };
export type TState = {
	tower: string;
	floor: string;
	meetingroom: string;
	date: {
		startTime: string;
		endTime: string;
		date: Date | string;
	};
	comment: string;
};
export type TOption = {
	value: string;
	label: string;
};

export type TErrors = {
	tower?: string;
	floor?: string;
	meetingroom?: string;
	date?: {
		startTime?: string;
		endTime?: string;
		date?: string;
	};
	comment?: string;
};
