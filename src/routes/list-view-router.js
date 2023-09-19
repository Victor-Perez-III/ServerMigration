const { Router } = require("express")
const verify = Router()


const tasks = [
    { id: "1", title: 'Hacer la compra', completed: 'false' },
    { id: '2', title: 'Estudiar Express', completed: 'true' },
    { id: '3', title: 'Terminar mis Tareas', completed: 'true' }
]


verify.get("/task-complete", (req, res) => {
    const completeTask = tasks.filter(tasks => tasks.completed)
    res.json(completeTask)
})

verify.get("/task-incomplete", (req, res) => {
    const incompleteTask = tasks.filter(tasks => !tasks.completed)
    res.json(incompleteTask)

})




module.exports = verify