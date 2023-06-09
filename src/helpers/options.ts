import { TOption } from '../types/types';

export const towers: TOption[] = [
	{ value: 'A', label: 'Башня A' },
	{ value: 'B', label: 'Башня Б' },
];
export const floors: TOption[] = new Array(25)
	.fill('')
	.map((_, index) => ({ value: `${3 + index}`, label: `Этаж ${3 + index}` }));

export const meetingrooms_array: TOption[] = new Array(10)
	.fill('')
	.map((_, index) => ({
		value: `${1 + index}`,
		label: `Переговорная ${1 + index}`,
	}));
