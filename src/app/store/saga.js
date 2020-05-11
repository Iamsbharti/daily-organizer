import { put, take, select } from "redux-saga/effects";
import axios from "axios";
import * as mutations from "./mutations";
import { v4 as uuidv4 } from "uuid";
import { history } from "./history";

const url = process.env.NODE_ENV == "production" ? "" : "http://localhost:8888";
//create a new task
export function* requestTaskCreate() {
  while (true) {
    const { groupId } = yield take(mutations.REQUEST_TASK_CREATION);
    const taskId = uuidv4();
    const ownerId = "U1";
    yield put(mutations.createTask(taskId, groupId, ownerId));
    const { res } = yield axios.post(url + "/task/newTask", {
      task: {
        name: "New Task",
        group: groupId,
        id: taskId,
        owner: ownerId,
        isComplete: false,
      },
    });
    console.log("Create Task Response", res);
  }
}
//modify new task
export function* modifyTask() {
  while (true) {
    const task = yield take([
      mutations.SET_GROUP_NAME,
      mutations.SET_TASK_COMPLETION,
      mutations.SET_TASK_NAME,
    ]);
    console.log(
      `update task ${task.taskId}-${task.name}-${task.group}-${task.isComplete}`
    );
    const res = yield axios.post(url + "/task/update", {
      task: {
        id: task.taskId,
        name: task.taskName,
        group: task.groupId,
        isComplete: task.isComplete,
      },
    });
    console.log("Response from update:", res);
  }
}
//authenticate user
export function* userAuthentication() {
  while (true) {
    const { username, password } = yield take(
      mutations.REQUEST_AUTHETICATE_USER
    );
    console.log(`user-${username}-pwd=${password}`);
    try {
      console.log("in try");
      const { data } = yield axios.post(url + "/authenticate", {
        username,
        password,
      });
      console.log("data", data);
      yield put(mutations.setState(data.state));
      yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));
      history.push("/dashboard");
      if (!data) {
        throw new Error();
      }
      console.log("Authenticated", data);
    } catch (e) {
      console.log("Can't Authenticate", e);
      yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
    }
  }
}
//add-modify comments
export function* modifyComments() {
  while (true) {
    const commentValues = yield take(mutations.SET_COMMENTS);
    console.log(`in modify_comments_saga-${commentValues}`);
    const { data } = yield axios.post(url + "/modifyComments", {
      task: commentValues.taskId,
      comment: commentValues.comments,
      owner: commentValues.ownerId,
      id: uuidv4(),
    });
    console.log("Response from server-modify-comments", data);
  }
}
