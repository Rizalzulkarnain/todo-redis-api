const express = require('express');

const router = express.Router();

const { getTodo, addTodo } = require('../controllers/todo.contorller');

router.get('/', getTodo);
router.post('/', addTodo);

module.exports = router;
