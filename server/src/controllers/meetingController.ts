import { Request, Response } from "express";
import * as service from "../services/meetingService";
import { MeetingCreate } from "../interfaces/Meeting.type";

export async function postMeeting(req: Request, res: Response){

}

export async function updateMeeting(req: Request, res: Response){

}

export async function deleteMeeting(req: Request, res: Response){

}

export async function getAllMeetings(req: Request, res: Response){
    try {
        const meetings = await service.getAllMeetings();
        return res.status(200).json(meetings);
    } catch (err) {
        console.error("getAllMeetings error:", err);
        return res.status(500).json({ error: "Failed to fetch meetings" });
    }
}

export async function getMeetingById(req: Request, res: Response){
    try {
        //check if id is missing
        if(!req.params.id){
            return res.status(400).json({ error: "id parameter is missing"});
        }

        const id = Number(req.params.id);

        //if id is a string, it will become NaN 
        if(isNaN(id)){
            return res.status(400).json({ error: "id is not a number"});
        }

        const meeting = await service.getMeetingById(id);
        //getApplicationById serves you either an application or null
        if(!meeting){
            return res.status(404).json({ error: "Meeting not found"});
        }

        return res.status(200).json(meeting);
    } catch (err) {
        console.error("getAllMeetings error:", err);
        return res.status(500).json({ error: "No meeting with this id"});
    }
}