import express from "express";
import dbConnect from "./config/dbConnect.js";
import usersRoute from "./routes/users.route.js";
import tasksRoute from "./routes/tasks.route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express()
const port = 3000

app.use(express.json());
app.use(express.static("dist"));

app.use("/users", usersRoute);
app.use("/tasks", tasksRoute);

const startServer = async () => {
  await dbConnect();

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

startServer();
