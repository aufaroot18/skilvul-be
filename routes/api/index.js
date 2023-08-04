import express from "express";
import todoRouter from "./todo.js";

const apiRouter = express.Router();

apiRouter.use("/api/todos", todoRouter);

export default apiRouter;
