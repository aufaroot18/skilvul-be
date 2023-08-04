import express from "express";
import cors from "cors";

import "./config/env.js";
import "./config/db.js";
import router from "./routes/api.js";

const app = express();
const port = process.env.PORT | 3000;

app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Backend Todo" });
});

app.use("/api/todos", router);

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
