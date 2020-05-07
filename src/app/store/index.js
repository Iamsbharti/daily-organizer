import { createStore } from "redux";
import { defaultState } from "../../server/defaultState";
console.log(defaultState);
export const store = createStore(function reducer(
  state = defaultState,
  action
) {
  return state;
});
