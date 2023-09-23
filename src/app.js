const express = require("express");
const taskViewRouter = require("./routes/list-view-router")
const taskFunction = require("./routes/list-edit-router")
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(taskViewRouter)
app.use(taskFunction)


app.listen(PORT, () => {
    console.log("Server is Running.....");
})




