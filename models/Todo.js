import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  completed: {
    required: true,
    type: Boolean,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
