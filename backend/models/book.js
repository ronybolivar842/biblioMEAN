import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  pages: Number,
  author: String,
  frontPageUrl: String,
  publicationDate: Date,
  category: String,
  user: { type: mongoose.Schema.ObjectId, ref: "users" },
  registerDate: { type: Date, default: Date.now },
  dbStatus: { type: Boolean, default: true },
});

const book = mongoose.model("books", bookSchema);

export default book;