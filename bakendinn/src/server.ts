import express, {Request,Response}from "express";
import "./db";

//routes
import applicationRoutes from "./routes/applicationRoutes"; 
const app = express();
const PORT = 8080;

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome to the Express + TypeScript Server!" });
});

//application routein
app.use("/application", applicationRoutes);


export default app;