import React from "react";
import "./Textarea.css";

export interface TextAreaProps
	extends React.DetailedHTMLProps<
		React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {}

export const Textarea = ({
	onChange,
	className,
	...props
}: TextAreaProps): JSX.Element => {
	return (
		<textarea
			className={`textarea ${className}`}
			{...props}
			onChange={onChange}
		/>
	);
};
