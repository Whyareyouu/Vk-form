// @flow
import * as React from 'react';
import Select from 'react-select';
import { TOption } from '../../types/types';
interface CustomSelectProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	options?: TOption[];
	onChange: () => void;
}
export const CustomSelect = ({
	options,
	onChange,
	placeholder,
	...props
}: CustomSelectProps): JSX.Element => {
	return (
		<Select options={options} placeholder={placeholder} onChange={onChange} />
	);
};
