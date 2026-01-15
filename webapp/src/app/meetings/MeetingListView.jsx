
export default function MeetingListView({meetings}){
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
        <div className="meeting-list" key={meeting.id}>

            <div className="meeting-list-header">

                <div className="meeting-list-title">
                    {meeting.title}
                </div>

                <div className="meeting-list-date">
                    {formatDateAndTime(meeting.date_and_time)}
                </div>

                <div className="meeting-list-status">
                    {meeting.status}
                </div>
                            
            </div>

            <div className="meeting-list-content">
                {meeting.long_description}
            </div>
        </div>
        
    );

    return(
        <div className="meeting-list-wrapper">
            {meetingList}
        </div>
    );
}