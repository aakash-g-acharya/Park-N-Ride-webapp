// require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");



// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

// app.use("/api/auth", authRoutes);

const port = 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
