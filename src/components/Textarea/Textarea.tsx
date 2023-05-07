import React from 'react';
import './Textarea.css';

export interface TextAreaProps
	extends React.DetailedHTMLProps<
		React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	error?: string;
}

export const Textarea = ({
	onChange,
	className,
	error,
	...props
}: TextAreaProps): JSX.Element => {
	return (
		<>
			<textarea
				className={`textarea ${className}`}
				{...props}
				onChange={onChange}
			/>
			{error && <span>{error}</span>}
		</>
	);
};
