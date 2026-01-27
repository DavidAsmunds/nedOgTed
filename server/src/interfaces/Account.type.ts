export interface AccountCreate{
    username: string;
    password: string;
    email:string;
    kennitala: string;
    phone_number: string;
}

export type Account = {id:number, isAdmin:boolean} & AccountCreate;