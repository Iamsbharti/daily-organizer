import { connectDb } from "./connect-db";
export function signUpRoute(app) {
  app.post("/signUp", async (req, res) => {
    let db = await connectDb();
    let collection = await db.collection("users");

    let user = req.body.user;
    console.log("user-", user);

    await collection.insertOne(user);

    res.status(200).send("SignUp Success");
  });
}
