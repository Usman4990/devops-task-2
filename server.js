const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "DevOps Task 2 App";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: `Welcome to ${APP_NAME}`,
        status: "running",
        environment: process.env.NODE_ENV || "development"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.get("/api/info", (req, res) => {
    res.json({
        application: APP_NAME,
        version: "1.0.0",
        containerized: true
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`${APP_NAME} running on port ${PORT}`);
    });
}

module.exports = app;

