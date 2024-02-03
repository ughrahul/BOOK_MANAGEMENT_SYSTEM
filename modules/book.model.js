const { Schema, model } = require("mongoose");

const BlogSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now() },
  words: { type: Number, required: true },
  time: { type: Number, required: true },
  content: { type: String, required: true },
  featuredImage: { type: Buffer },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports = model("Book", BlogSchema);
