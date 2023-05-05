import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	variant?: 'green' | 'red';
}

export const Button = ({
	type,
	onClick,
	variant = 'green',
	children,
}: ButtonProps): JSX.Element => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${variant === 'green' ? 'green' : 'red'}`}>
			{children}
		</button>
	);
};
