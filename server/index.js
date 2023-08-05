
const express = require("express");
const app = express();

// import all the routes
const userRoutes = require("./routes/User");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000;

// database-Connection
database.database_connection();
// middleware

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    // entertain the frontend
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// routes
app.use("/api/v1/auth", userRoutes);

// default route

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
