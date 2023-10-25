

const checkParams = (req, res, next) => {
    const params = req.params
    if (!params || !params._id) {
        res.status(400).send("Parametro incorrecto =(")
    }
    next()
}