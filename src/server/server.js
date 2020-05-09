import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDb } from "./connect-db";
import "./initialize-db";
import { autheticationRoute } from "./authenticate";
import path from "path";
//initailize a port
let port = process.env.PORT || "8888";

//init the app
let app = express();

//listen the app at a port
app.listen(port, console.log(`App listining at- ${port}`));

//use cors and body-parser for post requests
app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

//call authenticateroute
autheticationRoute(app);

//production config
if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.resolve(__dirname, "../../dist")));
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve("index.html"));
  });
}

//add new task method
export const addNewtask = async (task) => {
  let db = await connectDb();
  let collection = db.collection("tasks");
  await collection.insertOne(task);
};
//update existing task
export const updateTask = async (task) => {
  let { id, group, name, isComplete } = task;
  let db = await connectDb();
  let collection = db.collection("tasks");

  if (group) {
    await collection.updateOne({ id }, { $set: { group } });
  }
  if (name) {
    await collection.updateOne({ id }, { $set: { name } });
  }
  if (isComplete !== undefined) {
    await collection.updateOne({ id }, { $set: { isComplete } });
  }
};
app.post("/task/newTask", async (req, res) => {
  let task = req.body.task;
  await addNewtask(task);
  res.status(200).send();
});

app.post("/task/update", async (req, res) => {
  let task = req.body.task;
  await updateTask(task);
  res.status(200).send();
});
