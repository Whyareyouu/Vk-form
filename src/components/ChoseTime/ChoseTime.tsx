import * as React from 'react';
import './ChoseTime.css';
import { TOption } from '../../types/types';
import { useFormDispatch } from '../../hooks/useFormDispatch';
import { ActionPoints } from '../../ui/reducer/enums';
import CustomSelect from '../CustomSelect/CustomSelect';
interface ChoseTimeProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	startTime: number;
	endTime: number;
	error?: string;
	selectedStartTime: string;
	selectedEndTime: string;
}
export const ChoseTime = ({
	className,
	selectedStartTime,
	selectedEndTime,
	startTime,
	endTime,
	error,
	...props
}: ChoseTimeProps) => {
	const dispatch = useFormDispatch();
	const handleChangeStartTime = (selectedOption: TOption) => {
		dispatch({ type: ActionPoints.STARTTIME, payload: selectedOption.value });
	};
	const handleChangeEndTime = (selectedOption: TOption) => {
		dispatch({ type: ActionPoints.ENDTIME, payload: selectedOption.value });
	};
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
		<div className={`${className}`}>
			<div className='DatePicker'>
				<CustomSelect
					value={times.find((time) => time.value === selectedStartTime) || null}
					options={times}
					placeholder='9:00'
					onChange={handleChangeStartTime}
				/>
				<span>—</span>
				<CustomSelect
					value={times.find((time) => time.value === selectedEndTime) || null}
					options={times}
					placeholder='21:00'
					onChange={handleChangeEndTime}
				/>
			</div>
			{error && <span className='error'>{error}</span>}
		</div>
	);
};
export default React.memo(ChoseTime);
