const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const studentRoutes = require("./routes/student.routes");
const sequelize = require("./config/db.config");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/student", studentRoutes);

// Sync Database
sequelize.sync().then(() => console.log(" Database Synchronized"));

module.exports = app;
