const { Router } = require("express")
const editar = Router()
const tasks = require("../data/taskList")

editar.post('/create-task', (req, res) => {
    const newTask = req.body
    newTask.push(newTask)
    res.status(201).json("Tarea creada con exito")
});

editar.put('/update-task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, completed } = req.body;
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, title, completed };
        }
        return task;
    });
    res.json({ message: `Tarea ${taskId} has sido actualizada` });
});


editar.delete('/delete-task/:taskid', (req, res) => {

    const taskId = req.params.id
    const index = task.findIndex((iTask) => iTask.id == taskId)
    if (index >= 0) {
        tasks.splice(index, 1)
        res.status(200).json({ message: `Tarea ${taskId} has sido borrada` })
    }
});

module.exports = editar