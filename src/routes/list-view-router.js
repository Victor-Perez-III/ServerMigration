const { Router } = require("express")
const tasksRouter = Router()
const task = require("../data/taskList")

tasksRouter.get("/complete", (req, res) => {
    const completeTasks = tasks.filter(task => task.completed === true)
    res.json(completeTasks)
})

tasksRouter.get("/incomplete", (req, res) => {
    const incompleteTasks = tasks.filter(task => task.completed === false)
    res.json(incompleteTasks)
})

module.exports = tasksRouter
