import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./routes/games.routes";

const app: Application = express();

app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
