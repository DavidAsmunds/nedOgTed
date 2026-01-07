"use client"

import {useState, useEffect} from 'react';

export default function MeetingTable(){
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/meeting")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMeetings(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    
    //date and time comes in this form: 2026-01-09T18:00:00.000Z so im going to manipulate it
    function formatDateAndTime(date_and_time){
        const dateAndTime = new Date(date_and_time);

        const time = dateAndTime.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit"
        });

        const date = dateAndTime.toLocaleDateString("en-GB",{
            day: "2-digit",
            month: "2-digit",
            year: "2-digit"
        });

        return `${time} ${date}`;
    }

    const meetingList = meetings.map(meeting =>
        <tr key={meeting.id}>
            <td>
                {meeting.title}
            </td>
            <td>
                {meeting.short_description}
            </td>
            <td>
                {formatDateAndTime(meeting.date_and_time)}
            </td>
            <td>
                {meeting.status}
            </td> 
        </tr>
    );
    
    return(
        <table className="meeting-table">
            <caption className="meeting-table-title">  Fyrri og komandi fundir </caption>
            {meetingList}
        </table>
    );
}