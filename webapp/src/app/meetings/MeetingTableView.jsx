export default function MeetingTableView({meetings}){
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

    const meetingTable = meetings.map(meeting =>
        <tr key={meeting.id}>
            <td> {meeting.title} </td>
            <td> {meeting.short_description} </td>
            <td> {formatDateAndTime(meeting.date_and_time)} </td>
            <td> {meeting.status} </td> 
        </tr>
    );

    return(
        <table className="meeting-table">
            <caption className="meeting-table-title">  Fyrri og komandi fundir </caption>
            {meetingTable}
        </table>
    );
}