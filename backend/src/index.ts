import express from "express";
import router from "./routes/data";
import { fetchData } from "./services/pollData";

const app = express();
const codes = ["BTC", "ETH", "GRIN"];

setInterval(() => {
  console.log("Polling data...");
  fetchData(codes);
}, 10000);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
