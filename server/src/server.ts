import express, {Request,Response}from "express";
import cors from "cors";
import "./db";

const app = express();

app.use(cors());
app.use(express.json())


import routes from "./routes";
//route
app.use("/", routes);


export default app;