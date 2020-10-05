const Todo = require('../models/todo');

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find().cache({ expire: 10 });

    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        succes: false,
        message: 'Missing title or article',
      });
    }

    const todo = new Todo({ title, description });

    await todo.save();
    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
