import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
