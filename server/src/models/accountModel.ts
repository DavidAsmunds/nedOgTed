import pool from "../db";
import { AccountCreate,Account } from "../interfaces/Account.type";

export async function createAccount(data :AccountCreate): Promise<Account> {
    const values = [
        data.username,
        data.kennitala,
        data.phone_number,
        data.email,
        data.kennitala
    ];
    
    const query = `
        INSERT INTO account 
    `;
    try{

    }
}

export async function updateAccount(data: AccountCreate): Promise<Account> {
}

export async function deleteAccount(id: number): Promise<Account> {
}

export async function getAccount(id: number): Promise<Account> {
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
}