import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import reviewRoute from "./routes/reviewsRoute.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoDBURL = process.env.MONGODB_URL;

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Welcome to Book Review System");
});

app.use("/reviews", reviewRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database.");

    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });
