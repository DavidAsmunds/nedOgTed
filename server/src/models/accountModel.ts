import pool from "../db";
import { AccountCreate,Account } from "../interfaces/Account.type";

export async function createAccount(data :AccountCreate): Promise<Account> {
}

export async function updateAccount(data: AccountCreate): Promise<Account> {
}

export async function deleteAccount(id: number): Promise<Account> {
}

export async function getAccount(id: number): Promise<Account> {
}

export async function getAllAccounts(): Promise<Account[]> {
}

export async function makeAccountAdmin(id: number, isTrue:boolean): Promise<Account> {
}