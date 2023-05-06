import { DetailedHTMLProps, HTMLAttributes } from 'react';
import './Modal.css';
interface ModalProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	active: boolean;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({
	active,
	setActive,
	children,
}: ModalProps): JSX.Element => {
	return (
		<div
			className={active ? 'modal modal__active' : 'modal'}
			onClick={() => setActive(false)}>
			<div
				className={active ? 'modal__content modal__active' : 'modal__content'}
				onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};
