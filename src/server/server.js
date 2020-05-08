import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDb } from "./connect-db";

//initailize a port
let port = "8888";

//init the app
let app = express();

//listen the app at a port
app.listen(port, console.log(`App listining at- ${port}`));

//use cors and body-parser for post requests
app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

//add new task method
export const addNewtask = async (task) => {
  let db = await connectDb();
  let collection = db.collection("tasks");
  await collection.insertOne(task);
};
app.post("/task/newTask", async (req, res) => {
  let task = req.body.task;
  await addNewtask(task);
  res.status(200).send();
});
