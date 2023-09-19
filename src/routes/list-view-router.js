const { Router } = require("express")
const tasksRouter = Router()

const tasks = [
    { id: "1", title: 'Hacer la compra', completed: false },
    { id: '2', title: 'Estudiar Express', completed: true },
    { id: '3', title: 'Terminar mis Tareas', completed: true }
]

tasksRouter.get("/complete", (req, res) => {
    const completeTasks = tasks.filter(task => task.completed === true)
    res.json(completeTasks)
})

tasksRouter.get("/incomplete", (req, res) => {
    const incompleteTasks = tasks.filter(task => task.completed === false)
    res.json(incompleteTasks)
})

module.exports = tasksRouter, tasks
