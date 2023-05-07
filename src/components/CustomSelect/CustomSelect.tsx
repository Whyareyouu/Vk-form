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
}
export const CustomSelect = ({
	options,
	onChange,
	placeholder,
	error,
	...props
}: CustomSelectProps): JSX.Element => {
	return (
		<>
			<Select options={options} placeholder={placeholder} onChange={onChange} />
			{error && <span>{error}</span>}
		</>
	);
};
