import { Request, Response } from "express";
import * as service from "../services/applicationService";
import { ApplicationCreate } from "../interfaces/Application.type";

export async function postApplication(req: Request, res: Response) {
    try {
        const data: ApplicationCreate = req.body;
        const created = await service.createNewApplication(data);
        return res.status(201).json(created);
    } catch (err: any) {
        console.error("postApplication error: ", err);

        if (err instanceof Error) {
            return res.status(400).json({ error: err.message });
        }
        
        return res.status(500).json("postApplication error");
    }
}

export async function getAllApplications(req: Request, res: Response) {
    try {
        const applications = await service.getAllApplications();
        return res.status(200).json(applications);
    } catch (err) {
        console.error("getAllApplications error:", err);
        return res.status(500).json({ error: "Failed to fetch applications" });
    }
}

export async function getApplicationById(req: Request, res: Response){
    try{
        //check if id is missing
        if(!req.params.id){
            return res.status(400).json({ error: "id parameter is missing"});
        }

        const id = Number(req.params.id);

        //if id is a string, it will become NaN 
        if(isNaN(id)){
            return res.status(400).json({ error: "id is not a number"});
        }

        const application = await service.getApplicationById(id);
        //getApplicationById serves you either an application or null
        if(!application){
            return res.status(404).json({ error: "Appilication not found"});
        }

        return res.status(200).json(application);
    }
    catch(err){
        console.error("getApplicationById error:", err);
        return res.status(500).json({ error: "Failed to fetch application" });
    }
}
