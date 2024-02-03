require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const indexRouter = require("./routes");
const bookRouter = require("./modules/book.route");

const PORT = Number(process.env.PORT);

// Handles incoming requests containing JSON data
app.use(express.json());

// Connecting to the database
mongoose.connect(process.env.DB).then(() => {
  console.log("Database is Connected.");
});

// Serves static files from the public directory
app.use(express.static("public"));

// Using the book routes
app.use("/books", bookRouter);

// Using the index routes
app.use("/", indexRouter);

// Handles errors
app.use((err, req, res, next) => {
  console.error(err);
  err = err ? err.toString() : "Something went wrong";
  res.status(500).json({ msg: err });
});

// Listens on the specified port
app.listen(PORT, () => {
  console.log(`Application is running on http://localhost:${PORT}`);
});
