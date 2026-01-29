import { AccountCreate,Account } from "../interfaces/Account.type";
import * as model from "../models/accountModel";
import * as hash from "../utils/hashingPass"

export async function createAccount(data:AccountCreate): Promise<Account> {
    data.password = hash.hashNewPassword(data.password);
    return await model.createAccount(data);
}

export async function updateAccount(data:AccountCreate): Promise<Account> {
    return await model.updateAccount(data);
}   

export async function deleteAccount(id:number): Promise<Account> {
    return await model.deleteAccount(id);
}

export async function getAccount(id:number): Promise<Account> {
    return await model.getAccount(id);
}

export async function getAllAccounts(): Promise<Account[]> {
    return await model.getAllAccounts();
}

export async function makeAccountAdmin(id:number, isAdmin:boolean): Promise<Account> {
    return await model.makeAccountAdmin(id, isAdmin);
}