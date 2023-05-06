import * as React from 'react';
import meetingroom_icon from './meetingroom.svg';
import './Meetingrooms.css';
interface MeetingroomsProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {}
export const Meetingrooms = ({ className, ...props }: MeetingroomsProps) => {
	return (
		<div className={`${className}`}>
			<h1 className='meetingrooms__title'>Выберите переговорку</h1>
			<div className='meetingrooms'>
				<img src={meetingroom_icon} alt='' />
				<img src={meetingroom_icon} alt='' />
				<img src={meetingroom_icon} alt='' />
				<img src={meetingroom_icon} alt='' />
				<img src={meetingroom_icon} alt='' />
				<img src={meetingroom_icon} alt='' />
				<img src={meetingroom_icon} alt='' />
				<img src={meetingroom_icon} alt='' />
				<img src={meetingroom_icon} alt='' />
				<img src={meetingroom_icon} alt='' />
			</div>
		</div>
	);
};
