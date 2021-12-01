const express = require('express');
const router = express.Router();
const { createTask, updateTask, deleteTask, getTasks } = require('../controller/taskController');
const verifyToken = require('../controller/verifyTokenController');

//@desc POST get a Tasks
//@route POST /api/task
//@access Public
router.get('/', verifyToken, getTasks);

//@desc POST Create a Task
//@route POST /api/task/create
//@access Public
router.post('/create', verifyToken, createTask);

//@desc POST Update a Task
//@route POST /api/task/update
//@access Public
router.post('/update', verifyToken, updateTask);

//@desc POST Delete a Task
//@route POST /api/task/delete
//@access Public
router.post('/delete', verifyToken, deleteTask);

module.exports = router;