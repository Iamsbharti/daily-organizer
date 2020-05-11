import md5 from "md5";
import { connectDb } from "./connect-db";
import { v4 as uuidv4 } from "uuid";

const authenticationToken = [];

async function assembleUserState(user) {
  let db = await connectDb();

  let tasks = await db.collection("tasks").find({ owner: user.id }).toArray();
  let groups = await db.collection("groups").find({ owner: user.id }).toArray();

  return {
    tasks,
    groups,
    session: {
      authenticated: "AUTHENTICATED",
      id: user.id,
      username: user.name,
    },
  };
}
export const autheticationRoute = (app) => {
  app.post("/authenticate", async (req, res) => {
    let db = await connectDb(); //connect to db
    let collection = db.collection("users"); //get users collection
    let { username, password } = req.body; //destruct the values from req body

    let user = await collection.findOne({ name: username }); //get singleuser from the collection

    if (!user) {
      return res.status(500).send("User Not Found!!");
    }

    //hash the password and match it to the stored value
    let hash = md5(password);
    let isPasswordCorrect = hash === user.passwordHash;

    if (!isPasswordCorrect) {
      return res.status(500).send("Password Is Incorrect");
    }
    let token = uuidv4();
    authenticationToken.push({
      token,
      userId: user.id,
    });

    //initialise state for the user
    let state = await assembleUserState(user);
    res.send({ token, state });
  });
};
