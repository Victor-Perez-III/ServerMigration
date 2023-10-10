const express = require("express");
const bodyParser = require('body-parser')
const taskViewRouter = require("./routes/list-view-router")
const taskFunction = require("./routes/list-edit-router");
const httpVerify = require("./middlewares/verificacion-http");

const app = express();
const PORT = 3000;

app.use(httpVerify)
app.use(bodyParser.json())
app.use(express.json())
app.use(taskViewRouter)
app.use(taskFunction)


app.listen(PORT, () => {
    console.log("Server is Running.....");
})


module.exports = app




