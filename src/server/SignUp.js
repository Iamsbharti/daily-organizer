import { connectDb } from "./connect-db";
export function signUpRoute(app) {
  app.post("/signUp", async (req, res) => {
    let db = await connectDb();
    let users_collection = await db.collection("users");
    let group_collection = await db.collection("groups");

    let user = req.body.user;
    let groups = req.body.input_group;
    console.log("user-", user);
    console.log("groups-", groups);

    await users_collection.insertOne(user);
    for (let group in groups) {
      await group_collection.insertOne(groups[group]);
    }

    res.status(200).send("SignUp Success");
  });
}
