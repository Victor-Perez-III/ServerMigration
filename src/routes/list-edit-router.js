const express = require("express")
const { Router } = require("express")
const editar = Router()
const tasks = require("../data/taskList")



editar.post('/create-task', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask)
    res.status(201).json("Tarea creada con exito")
});

editar.put('/update-task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, completed } = req.body;
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, title, completed };
        }
        return tasks;
    });
    res.json({ message: `Tarea ${taskId} has sido actualizada` });
});


editar.delete('/delete-task/:taskid', (req, res) => {

    const taskId = req.params.id
    const index = tasks.findIndex((iTask) => iTask.id == taskId)
    if (index !== -1) {
        tasks.splice(index, 1);
        res.status(200).json({ message: `Tarea ${taskId} ha sido borrada` });
    } else {
        res.status(404).json({ message: `Tarea ${taskId} no encontrada` });
    }
});

module.exports = editar