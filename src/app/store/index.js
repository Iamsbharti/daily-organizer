import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import * as sagas from "./sagas.mock";
import * as mutations from "./mutations";
const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    tasks(tasks = defaultState.tasks, action) {
      switch (action.type) {
        case mutations.CREATE_TASK:
          console.log("in store--create-task--store/reducers");
          return [
            ...tasks,
            {
              id: action.taskId,
              name: "New Task",
              group: action.groupId,
              owner: action.ownerId,
              isComplete: false,
            },
          ];
        case mutations.SET_TASK_COMPLETION:
          return tasks.map((task) => {
            return task.id === action.taskId
              ? { ...task, isComplete: action.isComplete }
              : task;
          });
        case mutations.SET_TASK_NAME:
          return tasks.map((task) => {
            return task.id === action.taskId
              ? { ...task, name: action.taskName }
              : task;
          });
        case mutations.SET_GROUP_NAME:
          return tasks.map((task) => {
            return task.id === action.taskId
              ? { ...task, group: action.groupId }
              : task;
          });
      }
      return tasks;
    },
    groups(groups = defaultState.groups, action) {
      return groups;
    },
    comments(comments = defaultState.comments, action) {
      return comments;
    },
    users(users = defaultState.users, action) {
      return users;
    },
  }),
  applyMiddleware(createLogger(), sagaMiddleWare)
);

//run sagas
for (let saga in sagas) {
  console.log(`runing saga`);
  sagaMiddleWare.run(sagas[saga]);
  console.log(`finish running saga`);
}
