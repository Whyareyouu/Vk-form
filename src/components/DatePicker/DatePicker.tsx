import * as React from 'react';
import './DatePicker.css';
type Props = {};
export const DatePicker = (props: Props) => {
	const startTime = 9;
	const endTime = 22;
	const times = React.useMemo(
		() =>
			Array(endTime - startTime)
				.fill('')
				.map((_, index) => `${startTime + index}:00`),
		[startTime, endTime]
	);
	console.log(times);

	return (
		<div className='DatePicker'>
			{times.map((time, index) => (
				<span key={index} className='DatePicker__element'>
					{time}
				</span>
			))}
		</div>
	);
};
export default React.memo(DatePicker);
