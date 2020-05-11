import { connectDb } from "./connect-db";
export const modifyCommentsRoute = (app) => {
  app.post("/modifyComments", async (req, res) => {
    let db = await connectDb();
    let collection = db.collection("comments");
    let { task, content, owner, id } = req.body;
    console.log(`reque body -${task}-${content}-${owner}-${id}`);
    //search the collection for existing comments realted to task and user
    let comments = await collection.findOne({
      task: task,
      owner: owner,
    });
    //console.log(`comments in db-${Object.keys(comments)}`);
    if (comments) {
      console.log("updating comments");
      await collection.updateOne({ id }, { $set: { content } });
    }
    res.status(200).send("comments updated");
  });
};
