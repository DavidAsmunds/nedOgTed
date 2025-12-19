import pool from "../db";
import { Application, ApplicationCreate  } from "../interfaces/Application.type";

export async function createApplication(data:ApplicationCreate): Promise<Application> {

    const values = [
        data.name,
        data.kennitala,
        data.phoneNumber,
        data.generalEmail,
        data.uniEmail
    ];

    //checking if any required field is empty, db has null checks but better to not call it if needed
    if (values.some(value => !value || value.trim() === "")) {
        throw new Error("missing fields in the createApplication request");
    }

    if (data.kennitala.trim().length !==10) {
        throw new Error("kennitala has to be 10 digits");
    }

    if (data.phoneNumber.trim().length !== 7) {
        throw new Error("phonenumber has to be 7 digits");
    }

    const query = `
        INSERT INTO application (name, kennitala, phoneNumber, generalEmail, uniEmail)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;

    try{
        const result = await pool.query(query, values);
        return result.rows[0];
    }
    catch(err){
        console.error("createApplication DB error: ", err);
        throw err;
    }
}


export async function getAllApplications(): Promise<Application[]> {
    try{
        const result = await pool.query<Application>("SELECT * FROM application;");
        return result.rows;
    }
    catch(err){
        console.error("getApplications DB error: ", err);
        throw err;
    }
}


export async function getApplicationById(id: number): Promise<Application | null> {
    try{
        const result = await pool.query<Application>(
            "SELECT * FROM application WHERE id = $1;",[id]
        );

        if (result.rows.length === 0) {
            return null;
        }
        return result.rows[0];
    }
    catch(err){
        console.error("getApplicationById DB error: ", err);
        throw err;
    }
}