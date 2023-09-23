const express = require("express")
const { Router } = require("express")
const tasksRouter = Router()
const tasks = require("../data/tasks")

tasksRouter.get("/", (req, res) => {
    return res.json(tasks)
})

tasksRouter.get("/complete", (req, res) => {
    const completeTasks = tasks.filter(task => task.completed === true)
    res.json(completeTasks)
})

tasksRouter.get("/incomplete", (req, res) => {
    const incompleteTasks = tasks.filter(task => task.completed === false)
    res.json(incompleteTasks)
})

module.exports = tasksRouter
