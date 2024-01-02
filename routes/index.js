const express = require('express');
const router = express.Router();


const todoController = require('../controllers/todo_controller')
const addListController = require('../controllers/add_list_controller');
const deleteListController = require('../controllers/delete_list_controller');


console.log('router loaded');

router.get('/', todoController.home);
router.post('/create-list', addListController.add_list);
router.post('/delete-list', deleteListController.delete_list);


module.exports = router;