import express from "express";
import router from "./routes/data";
import { fetchData } from "./services/pollData";
import mongoose, { ConnectOptions } from "mongoose";

const app = express();
app.use(express.json());
app.use("/api", router);
mongoose
  .connect(process.env.MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log("MongoDb connected!");
  })
  .catch((error) => {
    console.log("MongoDb connection error:", error);
  });

const codes = ["BTC", "ETH", "GRIN"];

setInterval(() => {
  console.log("Polling data...");
  fetchData(codes);
}, 10000);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
