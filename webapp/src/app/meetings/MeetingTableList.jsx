"use client"

import {useState, useEffect} from 'react';
import TableListButtons from './TableListButtons';
import MeetingTableView from './MeetingTableView';
import MeetingListView from './MeetingListView';

export default function MeetingTableList(){
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

    const [active, setActive] = useState("Listi");
    
    return(
        <div className="meeting-table-list">
            <TableListButtons active={active} setActive={setActive}/>

            {active==="Tafla" ? 
                (<MeetingTableView meetings={meetings}/>) 
                : (<MeetingListView meetings={meetings}/>)
            }
            
        </div>
    );
}