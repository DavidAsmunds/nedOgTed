import express, {Request,Response}from "express";
import "./db";
const app = express();
const PORT = 8080;

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome to the Express + TypeScript Server!" });
});

export default app;