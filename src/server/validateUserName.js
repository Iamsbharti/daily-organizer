import { connectDb } from "./connect-db";
export function validateUserNameRoute(app) {
  app.post("/validateUser", async (req, res) => {
    let db = await connectDb();
    let collection = await db.collection("users");

    //get username from req body
    let input_username = req.body.username;
    console.log("validate req-body", input_username);
    let userNameFound = false;

    let user = await collection.findOne({ name: input_username });
    console.log("user-ret_val", user);
    if (user) {
      userNameFound = true;
    }
    console.log("user-status", userNameFound);
    res.status(200).send(userNameFound ? "USER_NAME_TAKEN" : "USER_NAME_VALID");
  });
}
