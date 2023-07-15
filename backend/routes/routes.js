import express from 'express';

import { addToDo,getAllTodos,toggleTodo ,updateTodo,deleteTodo} from '../controller/todo-controller.js';


const route=express.Router();

route.post('/todos',addToDo);

route.get('/todos',getAllTodos);

route.get('/todos/:id',toggleTodo);

route.put('/todos/:id',updateTodo);

route.delete('/todos/:id',deleteTodo);

export default route;