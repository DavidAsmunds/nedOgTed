import { AccountCreate,Account } from "../interfaces/Account.type";
import * as model from "../models/accountModel"

export async function createAccount(account:AccountCreate): Promise<Account> {
    return await model.createAccount;
}

export async function updateAccount(account:AccountCreate): Promise<Account> {
}

export async function deleteAccount(account:AccountCreate): Promise<Account> {
}

export async function getAccount(account:AccountCreate): Promise<Account> {
}

export async function getAllAccounts(account:AccountCreate): Promise<Account> {
}

export async function makeAccountAdmin(account:AccountCreate): Promise<Account> {
}