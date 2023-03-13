import express from "express";
import mongoose from "mongoose";
import homeOwnerRouter from "./routes/homeOwner-routes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json({ limit: "50mb", extended: true }));
app.use(cors());

// Routes
app.use("/api/v1/homeowners", homeOwnerRouter);

const CONNECTION_URL = process.env.ATLAS_URI;
const PORT = process.env.PORT || 5001;

mongoose.set("strictQuery", false);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
