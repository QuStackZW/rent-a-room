import express from "express";
import { getAllHomeOwners, register, login } from "../controllers/homeOwner-controller";

const homeOwnerRouter = express.Router();

homeOwnerRouter.get("/", getAllHomeOwners);
homeOwnerRouter.post("/register", register);
homeOwnerRouter.post("/login", login);

export default homeOwnerRouter;