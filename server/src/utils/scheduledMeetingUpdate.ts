import cron, { schedule } from "node-cron";
import { Pool } from "pg";

//Db is just the database to run this on
export default function startScheduledMeetingUpdate(db : Pool) {
    //20:04 everyday, second two stars are for date and month
    cron.schedule("04 20 * * *", async () => {
        try{
            const query = `
                UPDATE meeting
                SET status = 'completed'::meeting_status
                WHERE date_and_time <= CURRENT_TIMESTAMP 
                    AND status = 'upcoming'::meeting_status
                RETURNING id, status, date_and_time;
            `;
            const results = await db.query(query);
            //if the response is null/undefined we jsut disregard the latter part log
            console.log(`[cron] meeting statuses updated`, results.rows);

        }
        catch(err){
            console.log(`[cron] error with the scheduled cron meeting update: `, err);
        }
    }, { timezone: "UTC" });
}