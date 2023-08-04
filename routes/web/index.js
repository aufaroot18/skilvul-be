import express from "express";

const webRouter = express.Router();

webRouter.get("/", (req, res) => {
  return res.status(200).json({ message: "Backend Todo" });
});

export default webRouter;
