import mongoose from "mongoose";

const dbConnection = () => {
    try {
        mongoose.connect(process.env.DB_CONECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connection with MongoDB: OK");
    } catch (e) {
        console.log("Error connecting to MongoDB: \n ", e);
    }



};

export default { dbConnection };