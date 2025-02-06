const express = require("express");
const app = express();
const cors = require("cors");
const bosyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const { connectDB } = require("./Database/connection");

const PORT = process.env.PORT || 4001;

app.use(
    cors({
        origin:"http://localhost:4001",
        methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
        credentials: true,
    })
);

app.use(bosyParser.json())

connectDB();

app.use("/", require("./Router/router"))

const server = app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});