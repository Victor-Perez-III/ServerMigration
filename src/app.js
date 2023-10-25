const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const taskViewRouter = require("./routes/list-view-router");
const taskFunction = require("./routes/list-edit-router");
const httpVerify = require("./middlewares/verificacion-http");

dotenv.config();

const app = express();
const PORT = 3000;
const SECRET_KEY = process.env.KEY_SECRET;

app.use(httpVerify);
app.use(bodyParser.json());
app.use(express.json());
app.use(taskViewRouter);
app.use(taskFunction);


const users = [
    { username: "Victor", password: "1234" },
    { username: "Lucas", password: "4567" },
];

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ username }, SECRET_KEY);
    res.json({ token });
});


function verifyToken(req, res, next) {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: "Invalid token" });
        }
        next();
    });
}


app.get("/protected/data", verifyToken, (req, res) => {
    res.json({ message: "This is a protected route" });
});

app.listen(PORT, () => {
    console.log("Server is Running.....");
});





