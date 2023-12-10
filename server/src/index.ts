import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";
import { productRoute } from "./routes/product";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/product", productRoute);

mongoose.connect(
  "mongodb+srv://dimasoroka17:shoppassword@shop.qsetdex.mongodb.net/shop"
);

app.listen(3001, () => console.log("SERVER STARTED"));
