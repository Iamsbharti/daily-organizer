import { put, take, select } from "redux-saga/effects";
import * as mutations from "./mutations";
import { v4 as uuidv4 } from "uuid";

export function* taskCreationSaga() {
  while (true) {
    const { groupId } = yield take(mutations.REQUEST_TASK_CREATION);
    console.log(`Got ${groupId} in saga`);
    const ownerId = "U1";
    const taskId = uuidv4();
    yield put(mutations.createTask(taskId, groupId, ownerId));
  }
}
