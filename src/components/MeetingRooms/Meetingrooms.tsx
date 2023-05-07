import * as React from 'react';
import './Meetingrooms.css';
import { Meetingroom } from '../Meetingroom/meetingroom';
import { generateUniqueID } from '../../helpers/helpers';
import { useFormDispatch } from '../../hooks/useFormDispatch';
import { useFormState } from '../../hooks/useFormState';
import { ActionPoints } from '../../ui/reducer/enums';
interface MeetingroomsProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	error?: string;
}
const Meetingrooms = ({ className, error, ...props }: MeetingroomsProps) => {
	const dispatch = useFormDispatch();
	const state = useFormState();
	const rooms = new Array(10).fill(<Meetingroom />).map((room, index) => ({
		room: room,
		id: generateUniqueID(),
		value: `${index + 1}`,
	}));
	return (
		<div className={`${className}`}>
			<h2 className='meetingrooms__title'>Выберите переговорную</h2>
			<div className='meetingrooms'>
				{rooms.map((room) => (
					<div
						onClick={() =>
							dispatch({ type: ActionPoints.MEETINGROOM, payload: room.value })
						}
						key={room.id}
						className={`${
							room.value === state?.meetingroom ? 'active__room' : ''
						}`}>
						<span>#{room.value}</span>
						{room.room}
					</div>
				))}
			</div>
			{error && <span>{error}</span>}
		</div>
	);
};
export default React.memo(Meetingrooms);
