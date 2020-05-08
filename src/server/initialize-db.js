import { defaultState } from "./defaultState";
import { connectDb } from "./connect-db";

async function initializedb() {
  let db = await connectDb();
  for (let collectionName in defaultState) {
    let collection = db.collection(collectionName);
    await collection.insertMany(defaultState[collectionName]);
  }
}

initializedb();
