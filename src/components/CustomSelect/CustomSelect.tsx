import * as React from 'react';
import Select from 'react-select';
import { TOption } from '../../types/types';
interface CustomSelectProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	options?: TOption[];
	onChange: any;
	error?: string;
	value: TOption | null;
}
const CustomSelect = ({
	value,
	options,
	onChange,
	placeholder,
	error,
	...props
}: CustomSelectProps): JSX.Element => {
	return (
		<div>
			<Select
				options={options}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
			{error && <span className='error'>{error}</span>}
		</div>
	);
};
export default CustomSelect;
