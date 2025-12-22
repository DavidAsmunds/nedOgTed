import type { Meeting, MeetingCreate, MeetingUpdate  } from "../interfaces/Meeting.type";
import pool from "../db";


export async function createMeeting(data: MeetingCreate): Promise<Meeting> {
    const values = [
        data.title,
        data.longDescription,
        data.shortDescription,
        data.dateAndTime,
        data.status,
    ];

    //checking if any required field is empty, db has null checks but better to not call it if needed
    if (values.some(value => !value)) {
        throw new Error("missing fields in the createApplication request");
    }

    const query = `
        INSERT INTO meeting (title, longDescription, shortDescription, dateAndTime, status)
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
    const result = await pool.query<Meeting>("SELECT * FROM meeting ORDER BY id ASC LIMIT 1;");
    if (result.rows.length === 0) throw new Error("No meetings in DB");
    return result.rows[0];
}

export async function deleteMeeting(id: number): Promise<string>{
    return "wa";
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