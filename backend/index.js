import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./db/db.js";
import roleRoutes from "./routes/role.js";
import userRoutes from "./routes/user.js";
import bookRoutes from "./routes/book.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("Backend server running on port: ", process.env.PORT);
});

app.use("/api/role", roleRoutes);
app.use("/api/user", userRoutes);
app.use("/api/book", bookRoutes);

db.dbConnection();

