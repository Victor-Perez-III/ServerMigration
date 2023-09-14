const express = require('express')
const router = express.Router()

router.get("/tarea", (req, res) => {
    res.send("Tarea Completada")
})

router.get("/tarea", (req, res) => {
    res.send("La tarea no esta completada")
})