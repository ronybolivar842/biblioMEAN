import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    name: String,
    description: String,
    pages: Number,
    author: String,
    frontPageUrl: String,
    publicationDate: Date,
    category: String,
    copies: Number,
    registerDate: {type: Date, default: Date.now},
    dbStatus: true,
});

const role =mongoose.model("roles", roleSchema);
export default role;
