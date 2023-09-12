const express = require("express")
const app = express()
const PORT = 3000

const tasks = [
    { id: "1", title: 'Hacer la compra', isComplete: 'false' },
    { id: '2', title: 'Estudiar Express', isComplete: 'true' },
    { id: '3', title: 'Terminar mis Tareas', isComplete: 'true' }
]

app.get("/tasks", (req, res) => {
    res.json(tasks)
})

app.listen(PORT, () => {
    console.log("Server Running.....");
})


