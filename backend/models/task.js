import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.objectId, ref: "users"},
    name: String,
    description: String,
    pages: Number,
    author: String,
    frontPageUrl: String,
    publicationDate: Date,
    category: String,
    copies: Number,
    taskStatus: "to-do",
    imageUrl: String,
    registerDate: {type: Date, default: Date.now},

});

const task = mongoose.model("tasks", taskSchema);
export default task;