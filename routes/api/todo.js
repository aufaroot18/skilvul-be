import express from "express";
import TodoContoller from "../../controllers/TodoController.js";

const todoRouter = express.Router();

todoRouter.get("/", TodoContoller.index);
todoRouter.post("/", TodoContoller.store);
todoRouter.put("/:id", TodoContoller.update);
todoRouter.delete("/:id", TodoContoller.destroy);
todoRouter.get("/:id", TodoContoller.show);

export default todoRouter;
