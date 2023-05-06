export type TAction = {
	type: string;
	payload: string;
};
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
