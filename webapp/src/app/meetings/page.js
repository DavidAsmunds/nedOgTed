import MeetingTable from "./MeetingTable";
import TableListButtons from "./TableListButtons";

export default function Meetings(){
    return (
        <section className="section">
            <div className="meeting-content">
                <h1>
                    Fundir
                </h1>
                <p> 
                    Hallo og hæ við erum ned og ted, þessi lína skal fylla upp línuna í heild sinni 
                    þetta eru mikilvæg skilabop fyrir alla landsmenn, nær og fjær. svaka
                    mikilvæg skilaboð ngl, hvað veit ég um svona mál, takmarkað en hey, þetta er heil lína.
                </p>
                <TableListButtons/>
            </div>

            <MeetingTable/>
        
        </section>
    );
}