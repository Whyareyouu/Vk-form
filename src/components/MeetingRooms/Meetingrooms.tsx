import * as React from 'react';
import './Meetingrooms.css';
import { Meetingroom } from '../Meetingroom/meetingroom';
interface MeetingroomsProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {}
const Meetingrooms = ({ className, ...props }: MeetingroomsProps) => {
	const rooms = new Array(10).fill(<Meetingroom />);
	return (
		<div className={`${className}`}>
			<h2 className='meetingrooms__title'>Выберите переговорную</h2>
			<div className='meetingrooms'>
				{rooms.map((room, index) => (
					<React.Fragment key={index}>{room}</React.Fragment>
				))}
			</div>
		</div>
	);
};
export default React.memo(Meetingrooms);
