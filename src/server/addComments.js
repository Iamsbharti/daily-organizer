import { connectDb } from "./connect-db";

export function addCommentsRoute(app) {
  app.post("/addComments", async (req, res) => {
    let db = await connectDb();
    let collection = await db.collection("comments");

    const comment = req.body;
    console.log("adding comments");
    await collection.insertOne(comment);

    res.status(200).send("Comment add Sucessfully");
  });
}
