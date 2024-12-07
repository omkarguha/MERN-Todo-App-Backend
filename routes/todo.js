const {Router}= require('express');
const { getToDo, saveTodo, deleteTodo, updateTodo } = require('../controllers/todo');


const router= Router();


router.get('/', getToDo);
router.post('/save', saveTodo);
router.post('/delete', deleteTodo);
router.post('/update', updateTodo);


module.exports=router;