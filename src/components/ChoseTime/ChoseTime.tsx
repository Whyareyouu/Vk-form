import * as React from 'react';
import './ChoseTime.css';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { TOption } from '../../types/types';
interface ChoseTimeProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	startTime: number;
	endTime: number;
}
export const ChoseTime = ({
	className,
	startTime,
	endTime,
	...props
}: ChoseTimeProps) => {
	const times = React.useMemo(
		() =>
			Array(endTime - startTime)
				.fill('')
				.map((_, index) => ({
					label: `${startTime + index}:00`,
					value: `${startTime + index}:00`,
				})),
		[startTime, endTime]
	);
	return (
		<div className={`DatePicker ${className}`}>
			<CustomSelect options={times} placeholder='9:00' />
			<span>—</span>
			<CustomSelect options={times} placeholder='21:00' />
		</div>
	);
};
export default React.memo(ChoseTime);
