import TodoModel from "../models/Todo.js";

class TodoController {
  async index(req, res) {
    const response = {
      message: "",
      data: [],
    };

    try {
      const todos = await TodoModel.find();

      if (!todos || todos.length === 0) {
        response.message = "Todos is empty";
        return res.status(200).json(response);
      }

      response.data = todos;
      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async store(req, res) {
    const { title, completed } = req.body;

    const newTodo = new TodoModel({
      title: title,
      completed: completed ? completed : false,
    });

    try {
      const todo = await newTodo.save();

      const response = {
        message: "Todo is inserted",
        data: todo,
      };

      return res.status(201).json(response);
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const body = req.body;
    const options = { new: true };

    try {
      const updatedTodo = await TodoModel.findByIdAndUpdate(id, body, options);

      const response = {
        message: "Todo is updated",
        data: updatedTodo,
      };

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      const data = await TodoModel.findByIdAndDelete(id);
      const response = {
        message: "Todo is deleted",
      };

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const todo = await TodoModel.findOne({ _id: id });

      const response = {
        message: "Detail todo",
        data: todo,
      };

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

const todoContoller = new TodoController();
export default todoContoller;
