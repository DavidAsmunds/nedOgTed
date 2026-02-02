import pool from "../db";
import { AccountCreate,Account } from "../interfaces/Account.type";

export async function createNewAccount(data :AccountCreate): Promise<Account> {
    const values = [
        data.username,
        data.password,
        data.phone_number,
        data.email,
        data.kennitala
    ];

    const query = `
        INSERT INTO account (username, password_hash, phone_number, email, kennitala)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *;
    `;
    try{
        const result = await pool.query(query,values);
        return result.rows[0];
    }
    catch(err){
        console.error("createAccount DB error: ", err);
        throw err;  
    }
}

export async function updateAccount(data: AccountCreate): Promise<Account> {
    return getAccountById(1);
}

export async function deleteAccount(id: number): Promise<Account> {
    return getAccountById(1);
}

export async function getAccountById(id: number): Promise<Account> {
    try{
        const query =`SELECT * FROM account WHERE id=$1;`;
        const response = await pool.query<Account>(query,[id]);
        return response.rows[0];
    }
    catch(err){
        console.log("getAccount database error: ", err);
        throw err;
    }
}

export async function getAllAccounts(): Promise<Account[]> {
    try{
        const query =`SELECT * FROM account;`;
        const response = await pool.query<Account>(query);
        return response.rows;
    }
    catch(err){
        console.log("getAllAccounts database error: ", err);
        throw err;
    }
}

export async function makeAccountAdmin(id: number, isTrue:boolean): Promise<Account> {
    return getAccountById(1);
}