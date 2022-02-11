import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    description: String,
    pages: Number,
    author: String,
    frontPageUrl: String,
    publicationDate: Date,
    category: String,
    copies: Number,
    role: {type: mongoose.Schema,ObjectId, ref: "roles"},
    registerDate: {type: Date, default: Date.now },
    dbStatus: true,
});

const user = mongoose.model("users", userSchema)
export default user;
