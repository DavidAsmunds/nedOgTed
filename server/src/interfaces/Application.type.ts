export interface ApplicationCreate {
  name: string;
  kennitala: string;
  phone_number: string;
  general_email: string;
  uni_email: string;
};

export type Application = ApplicationCreate & { id: number };