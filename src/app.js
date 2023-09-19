const express = require("express");
const app = express();

const PORT = 3000;
const taskViewRouter = require("./routes/list-view-router")
const edit = require("./routes/list-edit-router")



app.use(taskViewRouter)
app.use(taskViewRouter)

app.use(edit)
app.use(edit)
app.use(edit)

app.listen(PORT, () => {
    console.log("Server is Running.....");
})




