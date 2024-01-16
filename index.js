require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const app = express();

const mongoString = process.env.DATABASE_URL;

app.use(express.json()).use("/api", routes), ("/api", routes);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

mongoose.connect(`${mongoString}`);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
