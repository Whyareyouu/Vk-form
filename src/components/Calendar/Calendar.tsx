import React, { useState } from 'react';
import './Calendar.css';
import { getDaysArray, weekdays } from './helpers';

interface CalendarProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {}

const Calendar = ({ className, ...props }: CalendarProps) => {
	const [currentDate, setCurrentDate] = useState<Date>(new Date());
	const [activeDate, setActiveDate] = useState<string | null>(null);
	const dateNow = new Date();
	const days = getDaysArray(currentDate);
	const prevMonth = () => {
		setCurrentDate(
			(prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
		);
	};

	const nextMonth = () => {
		setCurrentDate(
			(prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
		);
	};

	const handleDateClick = (day: Date, id: string): void => {
		if (
			(dateNow.getDate() > day.getDate() &&
				dateNow.getMonth() >= day.getMonth()) ||
			dateNow.getMonth() > day.getMonth() ||
			dateNow.getFullYear() > day.getFullYear()
		) {
			return;
		}
		setActiveDate(id);
		console.log(day);
		// прописать логику добавление даты в reducer
	};
	return (
		<div className={`calendar ${className}`}>
			<div className='header'>
				<div className='previous' onClick={prevMonth}>
					{'<'}
				</div>
				<div className='current-month'>
					{currentDate.toLocaleString('ru', { month: 'long', year: 'numeric' })}
				</div>
				<div className='next' onClick={nextMonth}>
					{'>'}
				</div>
			</div>
			<div className='weekdays'>
				{weekdays.map((weekday) => (
					<div className='weekday' key={weekday}>
						{weekday}
					</div>
				))}
			</div>
			<div className='days'>
				{days.map((day) => (
					<div
						className={`day ${
							day.getMonth() !== currentDate.getMonth() ? 'other-month' : ''
						}${activeDate === day.toISOString() ? 'active' : ''}`}
						key={day.toISOString()}
						onClick={() => handleDateClick(day, day.toISOString())}>
						{day.getDate()}
					</div>
				))}
			</div>
		</div>
	);
};

export default Calendar;
