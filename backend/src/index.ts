import express from "express";
import router from "./routes/data";
import { pollData } from "./services/pollData";
import { fetchData } from "./services/fetchData";
import mongoose, { ConnectOptions } from "mongoose";
import { WebSocketServer, WebSocket } from "ws";

const app = express();
app.use(express.json());
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const httpServer = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
const wss = new WebSocketServer({ server: httpServer });
wss.on("connection", function connection(ws) {
  ws.on("error", console.error);
  ws.on("message", function message(data, isBinary) {
    console.log("Received: ", data);
  });

  // ws.send("Hello! Message From Server!!");
});
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

setInterval(async () => {
  pollData(codes);
  const allData: any[] = [];

  for (const code of codes) {
    try {
      const data = await fetchData(code);
      if (Array.isArray(data)) {
        allData.push(...data);
      } else {
        console.error(`Data for ${code} is not an array`);
      }
    } catch (error) {
      console.error(`Failed to fetch data for ${code}:`, error);
    }
  }

  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(allData), { binary: false });
    }
  });
}, 10000);
