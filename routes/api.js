import express from "express";
import TodoContoller from "../controllers/TodoController.js";

const router = express.Router();

router.get("/", TodoContoller.index);
router.post("/", TodoContoller.store);
router.put("/:id", TodoContoller.update);
router.delete("/:id", TodoContoller.destroy);
router.get("/:id", TodoContoller.show);

export default router;
