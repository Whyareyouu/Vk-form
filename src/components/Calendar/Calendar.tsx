import React, { useState } from 'react';
import './Calendar.css';
import { formatDate, getDaysArray, weekdays } from './helpers';
import { useFormDispatch } from '../../hooks/useFormDispatch';
import { ActionPoints } from '../../ui/reducer/enums';

interface CalendarProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	error?: string;
	selectedDate: string | Date;
}

const Calendar = ({
	className,
	error,
	selectedDate,
	...props
}: CalendarProps) => {
	const dispatch = useFormDispatch();
	const [currentDate, setCurrentDate] = useState<Date>(new Date());
	const [activeDate, setActiveDate] = useState<Date | null>(null);
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
	const handleDateClick = (day: Date): void => {
		if (
			(dateNow.getDate() > day.getDate() &&
				dateNow.getMonth() >= day.getMonth()) ||
			dateNow.getMonth() > day.getMonth() ||
			dateNow.getFullYear() > day.getFullYear()
		) {
			return;
		}
		setActiveDate(day);
		dispatch({ type: ActionPoints.DATE, payload: formatDate(day) });
	};
	if (activeDate !== null && selectedDate !== formatDate(activeDate)) {
		setActiveDate(null);
	}
	return (
		<div className={`${className}`}>
			<div className='calendar'>
				<div className='header'>
					<div className='previous' onClick={prevMonth}>
						{'<'}
					</div>
					<div className='current-month'>
						{currentDate.toLocaleString('ru', {
							month: 'long',
							year: 'numeric',
						})}
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
							}${
								activeDate !== null && selectedDate === formatDate(day)
									? 'active'
									: ''
							}`}
							key={day.toISOString()}
							onClick={() => handleDateClick(day)}>
							{day.getDate()}
						</div>
					))}
				</div>
			</div>
			{error && <span className='error'>{error}</span>}
		</div>
	);
};

export default React.memo(Calendar);
