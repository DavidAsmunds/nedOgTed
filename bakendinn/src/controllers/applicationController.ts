import app from "./server";
import pool from "./db";

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});