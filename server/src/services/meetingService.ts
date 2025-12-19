import type { Meeting, MeetingCreate, MeetingUpdate } from "../interfaces/Meeting.type";
import * as model from "../models/meetingModel";

export async function createNewMeeting(data: MeetingCreate): Promise<Meeting> {
    return await model.createMeeting(data);
}

export async function updateMeeting(data: MeetingUpdate): Promise<Meeting> {
    return await model.updateMeeting(data);
}

export async function deleteMeeting(id: number): Promise<string>{
    return await model.deleteMeeting(id);
}

export async function getAllMeetings(): Promise<Meeting[]> {
  return await model.getAllMeetings();
}

export async function getMeetingById(id: number): Promise<Meeting | null> {
  return await model.getMeetingById(id);
}