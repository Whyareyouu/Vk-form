import React from 'react';
import './Textarea.css';

export interface TextAreaProps
	extends React.DetailedHTMLProps<
		React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	error?: string;
}

const Textarea = ({
	value,
	onChange,
	className,
	error,
	...props
}: TextAreaProps): JSX.Element => {
	return (
		<div className='Textarea__wrapper'>
			<textarea
				className={`textarea ${className}`}
				{...props}
				onChange={onChange}
				value={value}
			/>
			{error && <span className='error'>{error}</span>}
		</div>
	);
};
export default Textarea;
