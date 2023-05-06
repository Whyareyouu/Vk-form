import * as React from 'react';
import './ChoseTime.css';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { TOption } from '../../types/types';
interface ChoseTimeProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {}
export const ChoseTime = ({ className, ...props }: ChoseTimeProps) => {
	const [active, setActive] = React.useState<TOption | null>(null);
	const startTime = 9;
	const endTime = 22;
	const startTimes = React.useMemo(
		() =>
			Array(endTime - startTime)
				.fill('')
				.map((_, index) => ({
					label: `${startTime + index}:00`,
					value: `${startTime + index}:00`,
				})),
		[startTime, endTime]
	);
	if (active) {
		console.log(startTimes.indexOf(active));
		const endTimes = startTimes.slice(startTimes.indexOf(active) + 1);
		console.log(endTimes);
	}
	return (
		<div className={`DatePicker ${className}`}>
			<CustomSelect
				options={startTimes}
				placeholder='9:00'
				onChange={setActive}
			/>
			<CustomSelect options={startTimes} placeholder='21:00' />
		</div>
	);
};
export default React.memo(ChoseTime);
