export interface MeetingCreate {
    title: string;
    short_description: string;
    long_description: Text;
    date_and_time: Date;
    status: MeetingStatus;
};

//using timestamptz in database

export type Meeting = {id: number} & MeetingCreate;

export type MeetingUpdate =  { id: number } & Partial<MeetingCreate>;

enum MeetingStatus {
    Cancelled = "cancelled",
    Upcoming = "upcoming",
    Completed = "completed",
};