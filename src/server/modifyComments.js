import { connectDb } from "./connect-db";
export const modifyCommentsRoute = (app) => {
  app.post("/modifyComments", async (req, res) => {
    let db = await connectDb();
    let collection = db.collection("comments");
    let { task, comment, owner, id } = req.body;
    console.log(`reque body -${task}-${comment}-${owner}-${id}`);
    //search the collection for existing comments realted to task and user
    let comments = await collection.findOne({
      task: task,
      owner: owner,
      comment: comment,
    });
    console.log(`comments in db-${comments}`);
    if (comments) {
    }
    res.status(200).send(comments);
  });
};
