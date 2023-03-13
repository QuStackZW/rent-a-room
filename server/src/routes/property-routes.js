import express from "express";
import { getAllProperties, getProperty, createProperty } from "../controllers/property-controller";

const propertyRouter = express.Router();

propertyRouter.get("/", getAllProperties);
propertyRouter.get("/:id", getProperty);
propertyRouter.post("/add", createProperty);

export default propertyRouter;
