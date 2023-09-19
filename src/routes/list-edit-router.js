const { Router } = require("express")
const editar = Router()

editar.post('/', (req, res) => {

    const { title, completed } = req.body;

    const newTask = { id: tasks.length + 1, title, completed };
    tasks.push(newTask);
    res.json(newTask);
});

editar.put('/:id', (req, res) => {

    const taskId = parseInt(req.params.id);

    const { title, completed } = req.body;
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, title, completed };
        }
        return task;
    });
    res.json({ message: 'Tarea actualizada con éxito' });
});


editar.delete('/:id', (req, res) => {

    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== taskId);
    res.json({ message: 'Tarea eliminada con éxito' });
});

module.exports = editar