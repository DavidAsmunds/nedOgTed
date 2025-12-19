export interface ApplicationCreate {
  name: string;
  kennitala: string;
  phoneNumber: string;
  generalEmail: string;
  uniEmail: string;
};

export type Application = ApplicationCreate & { id: number };