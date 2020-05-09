import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
//import * as sagas from "./sagas.mock";
import * as sagas from "./saga";
import * as mutations from "./mutations";
const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    session(usersession = defaultState.session || {}, action) {
      const { type, authenticated, session } = action;
      switch (type) {
        case mutations.SET_STATE:
          return { ...usersession, id: action.state.session.id };
        case mutations.REQUEST_AUTHETICATE_USER:
          return {
            ...usersession,
            authenticated: mutations.AUTHENTICATING,
          };
        case mutations.PROCESS_AUTHENTICATING_USER:
          return {
            ...usersession,
            authenticated,
          };
        default:
          return usersession;
      }
    },
    tasks(tasks = [], action) {
      switch (action.type) {
        case mutations.SET_STATE:
          return action.state.tasks;
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
    groups(groups = [], action) {
      switch (action.type) {
        case mutations.SET_STATE:
          return action.state.groups;
      }

      return groups;
    },
    comments(comments = [], action) {
      return comments;
    },
    users(users = [], action) {
      return users;
    },
  }),
  applyMiddleware(createLogger(), sagaMiddleWare)
);

//run sagas
for (let saga in sagas) {
  //console.log(`runing saga`);
  sagaMiddleWare.run(sagas[saga]);
  // console.log(`finish running saga`);
}
