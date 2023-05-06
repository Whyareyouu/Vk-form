import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	variant?: 'primary' | 'error';
}

export const Button = ({
	type,
	onClick,
	variant = 'primary',
	children,
}: ButtonProps): JSX.Element => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${variant === 'primary' ? 'primary' : 'error'}`}>
			{children}
		</button>
	);
};
