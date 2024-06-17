import app from "./app";
import http from "http";
import env from "dotenv";

env.config();
const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log("game service is running...");
});
