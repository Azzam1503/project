require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connectDb");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
connectDB();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});
