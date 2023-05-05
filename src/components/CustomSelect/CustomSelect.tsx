// @flow
import * as React from 'react';
import Select from 'react-select';
type option = {
	value: string;
	label: string;
};
interface CustomSelectProps
	extends React.DetailedHTMLProps<
		React.SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	> {
	options?: option[];
}
export const CustomSelect = ({
	options,
	onChange,
	placeholder,
	value,
	...props
}: CustomSelectProps): JSX.Element => {
	return (
		<Select options={options} placeholder={placeholder} onChange={onChange} />
	);
};
