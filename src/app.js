const express = require("express");
const app = express();

const PORT = 3000;
const verify = require("./routes/list-view-router")
const edit = require("./routes/list-edit-router")



app.use("/complete-task", verify)
app.use("/incomplete-task", verify)

app.use('/create-task', edit)
app.use('/update-task', edit)
app.use('/delete-task', edit)

app.listen(PORT, () => {
    console.log("Server is Running.....");
})




