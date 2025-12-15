export interface ApplicationCreate {
  name: string;
  kennitala: string;
  phoneNumber: string;
  generalEmail: string;
  uniEmail: string;
};

export interface Application extends ApplicationCreate {
  id: number;
}