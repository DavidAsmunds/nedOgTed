import { Request, Response } from "express";
import * as service from "../services/accountService";
import { Account, AccountCreate } from "../interfaces/Account.type";

export async function postApplication(req: Request, res: Response) {
    try {
        const data: AccountCreate = req.body;
        const created = await service.createAccount(data);
        return res.status(201).json(created);
    } catch (err: any) {
        console.error("postApplication error: ", err);

        if (err instanceof Error) {
            return res.status(400).json({ error: err.message });
        }
        
        return res.status(500).json("postApplication error");
    }
}

export async function getAccountById(req: Request, res: Response){
    try{
        if(!req.params.id){
            return res.status(400).json({error:"id missing"});
        }

        const id = Number(req.params.id);

        if(isNaN(id)){
            return res.status(400).json({ error: "id is not a number"});
        }

        const account = await service.getAccountById(id);
        if(!account){
            return res.status(400).json({error: "account with id does not exist"});
        }

        return res.status(200).json(account);
    }
    catch(err){
        console.log("getAccountById error: ", err);
        throw err;
    }
    
}