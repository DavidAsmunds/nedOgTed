export interface MeetingCreate {
    title: string;
    shortDescription: string;
    longDescription: string;
    dateAndTime: Date;
    status: MeetingStatus;
};

export type Meeting = {id: number} & MeetingCreate;

export type MeetingUpdate =  { id: number } & Partial<MeetingCreate>;


enum MeetingStatus {
    Cancelled = "cancelled",
    Upcoming = "upcoming",
    Completed = "completed",
};