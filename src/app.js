const express = require("express");
const morgan = require("morgan")
const taskViewRouter = require("./routes/list-view-router")
const edit = require("./routes/list-edit-router")
const app = express();
const PORT = 3000;

app.use(express.json())

app.use(taskViewRouter)

app.use(edit)
app.use(edit)
app.use(edit)

app.listen(PORT, () => {
    console.log("Server is Running.....");
})




