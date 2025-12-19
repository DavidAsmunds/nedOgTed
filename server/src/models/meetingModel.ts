import type { Meeting, MeetingCreate, MeetingUpdate  } from "../interfaces/Meeting.type";
import pool from "../db";


export async function createMeeting(data: MeetingCreate): Promise<Meeting> {
    const result = await pool.query<Meeting>("SELECT * FROM meeting ORDER BY id ASC LIMIT 1;");
    if (result.rows.length === 0) throw new Error("No meetings in DB");
    return result.rows[0];
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