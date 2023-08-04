import express from "express";
import cors from "cors";

import "./config/env.js";
import "./config/db.js";
import webRouter from "./routes/web/index.js";
import apiRouter from "./routes/api/index.js";

const app = express();
const port = process.env.PORT | 3000;

app.use(express.json());
app.use(cors({ origin: true }));

app.use("/", webRouter);
app.use("/", apiRouter);

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
