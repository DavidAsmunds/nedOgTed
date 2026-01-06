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
    
    
    const meetingList = meetings.map(meeting =>
        <li key={meeting.id}>
            {meeting.title}, {meeting.short_description}, {meeting.status}
        </li>
    );
    
    return(
        <ul>
            {meetingList}
        </ul>
    );
}