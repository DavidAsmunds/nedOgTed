import type { Meeting, MeetingCreate, MeetingUpdate  } from "../interfaces/Meeting.type";
import pool from "../db";


export async function createMeeting(data: MeetingCreate): Promise<Meeting> {
    const values = [
        data.title,
        data.long_description,
        data.short_description,
        data.date_and_time,
        data.status,
    ];

    //checking if any required field is empty, db has null checks but better to not call it if needed
    if (values.some(value => !value)) {
        throw new Error("missing fields in the createApplication request");
    }

    const query = `
        INSERT INTO meeting (title, long_description, short_description, date_and_time, status)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;

    try{
        const response = await pool.query(query,values);
        return response.rows[0];
    }
    catch(err){
        console.log("createNewMeeting db error: ", err)
        throw err;
    }
}

export async function updateMeeting(data: MeetingUpdate): Promise<Meeting> {
    const id = data.id;

    //check if meeting exists
    if(getMeetingById(id) === null){
        console.log("meeting id does not exist in database");
        throw new Error;
    }

    //will use these two to construct the query of what has to be updated
    var sets = [];
    var values = [];
    
    // this is for the $1, $2... in the query
    var i = 2;

    // set the first value of the array as the id
    values.push(id);

    // then add data if present, as everything in the meeting is partial aside from the id
    if(data.title !== undefined){
        sets.push(`title = $${i}`);
        values.push(data.title);
        i++;
    }

    if(data.long_description !== undefined){
        sets.push(`long_description = $${i}`);
        values.push(data.long_description);
        i++;
    }

    if(data.short_description !== undefined){
        sets.push(`short_description = $${i}`);
        values.push(data.short_description);
        i++;
    }

    if(data.date_and_time !== undefined){
        sets.push(`date_and_time = $${i}`);
        values.push(data.date_and_time);
        i++;
    }

    if(data.status !== undefined){
        sets.push(`status = $${i}`);
        values.push(data.status);
    }

    const query = `
        UPDATE meeting
        SET ${sets.join(", ")}
        WHERE id = $1
        RETURNING *;
    `;

    try{
        const result = await pool.query<Meeting>(query,values);
        /*console.log(values);
        console.log(query);
        console.log(data);*/
        return result.rows[0];
    }
    catch(err){
        console.log("updateMeeting() db err: ", err);
        throw err;
    }
}

export async function deleteMeeting(id: number): Promise<string>{
    if(getMeetingById(id) === null){
        console.log("meeting id does not exist in database");
        throw new Error;
    }

    const query =`
        DELETE FROM meeting    
        WHERE id = $1
    `;

    try{
        await pool.query(query,[id]);
        return `meeting with id: ${id} was successfully deleted`;
    }
    catch(err){
        console.log("deleteMeeting db error", err);
        throw err;
    }
}


export async function getAllMeetings(): Promise<Meeting[]> {
    try{
        const result = await pool.query<Meeting>("SELECT * FROM meeting;");
        return result.rows;
        
    }
    catch(err){
        console.error("getAllMeetings() DB error: ", err);
        throw err;
    }
}

export async function getMeetingById(id: number): Promise<Meeting | null> {
    try{
        const result = await pool.query<Meeting>("SELECT * FROM meeting WHERE id = $1;",[id]);
        if (result.rows.length === 0) {
            return null;
        }

        return result.rows[0];
    }
    catch(err){
        console.error("getMeetingsById DB error: ", err);
        throw err;
    }
}