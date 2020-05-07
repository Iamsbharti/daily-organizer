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
          console.log("in store--create-task");
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
  sagaMiddleWare.run(sagas[saga]);
}
