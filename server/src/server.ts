import express, {Request,Response}from "express";
import cors from "cors";
import pool from "./db";

const app = express();

app.use(cors());
app.use(express.json())


import routes from "./routes";
//route
app.use("/", routes);

import startScheduledMeetingUpdate from "./utils/scheduledMeetingUpdate";
startScheduledMeetingUpdate(pool);

export default app;