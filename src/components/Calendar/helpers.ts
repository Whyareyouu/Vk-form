export const weekdays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
export const getDaysArray = (date: Date): Date[] => {
	const monthStart: Date = new Date(date.getFullYear(), date.getMonth(), 1);
	const monthEnd: Date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	const startDate: Date = new Date(monthStart);
	startDate.setDate(startDate.getDate() - startDate.getDay() + 1); // понедельник
	const endDate = new Date(monthEnd);
	endDate.setDate(endDate.getDate() + (7 - endDate.getDay())); // воскресенье

	const daysArray = [];
	let currentDate = startDate;

	while (currentDate <= endDate) {
		daysArray.push(new Date(currentDate));
		currentDate.setDate(currentDate.getDate() + 1);
	}

	return daysArray;
};
export const formatDate = (date: Date): string => {
	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear().toString();
	return `${year}-${month}-${day}`;
};
