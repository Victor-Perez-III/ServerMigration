const express = require("express")
const router = express.Router()


router.post("/tarea", (req, res) => {

    const data = req.body;

    res.send(`Datos recibidos: ${JSON.stringify(data)}`)
})


router.put("/tarea/:id", (req, res) => {
    const id = req.params.id
    const newData = req.body

    res.send(`Los datos han sido actualizados para el ID ${id}: ${JSON.stringify(newData)} `)
})

router.delete("/tareas/:id", (req, res) => {
    const id = req.params.id

    res.send(`Los datos del ID ${id} han sido eliminados`)
})

module.exports = router