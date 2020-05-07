import { createStore, applyMiddleware } from "redux";
import { defaultState } from "../../server/defaultState";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import * as sagas from "./sagas.mock";

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(function reducer(
  state = defaultState,
  action
) {
  return state;
},
applyMiddleware(createLogger(), sagaMiddleWare));

//run sagas
for (let saga in sagas) {
  sagaMiddleWare.run(sagas[saga]);
}
