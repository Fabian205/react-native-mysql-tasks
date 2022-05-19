import { Router } from "express";
import { deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from "../controllers/tasks";


const router = Router()

router.get('/tasks', getTasks)

router.get('/tasks/count', getTaskCount)

router.get('/tasks/:id', getTask)

router.get('/tasks', saveTask)

router.get('/tasks: id', deleteTask)

router.get('/tasks: id',updateTask)

export default router
