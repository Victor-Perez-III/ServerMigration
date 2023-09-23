const { Router } = require("express")
const taskFunction = Router()
const tasks = require("../data/tasks")


taskFunction.post('/create-task', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask)
    // console.log(tasks)
    res.status(201).json("Tarea creada con exito")
});


taskFunction.put('/update-task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, completed } = req.body;
    tasks.forEach((task, index) => {
        if (task.id === taskId) {
            tasks[index] = { ...task, title, completed };
            console.log(tasks)
            res.json({ message: `Tarea ${taskId} ha sido actualizada` });
            return;
        }
    });
    res.status(404).json({ message: `Tarea ${taskId} no encontrada` });
});


taskFunction.delete('/delete-task/:taskid', (req, res) => {

    const taskId = req.params.id
    const index = tasks.findIndex((iTask) => iTask.id == taskId)
    if (index !== -1) {
        tasks.splice(index, 1);
        // console.log(tasks)
        res.status(200).json({ message: `Tarea ${taskId} ha sido borrada` });
    } else {
        res.status(404).json({ message: `Tarea ${taskId} no encontrada` });
    }
});

module.exports = taskFunction