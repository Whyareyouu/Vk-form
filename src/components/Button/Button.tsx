import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	variant?: 'primary' | 'red';
}

export const Button = ({
	disabled,
	type,
	onClick,
	variant = 'primary',
	children,
}: ButtonProps): JSX.Element => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${variant === 'primary' ? 'primary' : 'red'}`}
			disabled={disabled}>
			{children}
		</button>
	);
};
