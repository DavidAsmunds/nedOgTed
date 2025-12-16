import { Application, ApplicationCreate } from "../interfaces/Application.type";
import * as model from "../models/applicationModel";

export async function createNewApplication(data: ApplicationCreate): Promise<Application> {
    return await model.createApplication(data);
}

export async function getAllApplications(): Promise<Application[]> {
  return await model.getAllApplications();
}

export async function getApplicationById(id: number): Promise<Application | null> {
  return await model.getApplicationById(id);
}