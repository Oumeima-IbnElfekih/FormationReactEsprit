import { combineReducers } from "redux"
import { tasks } from "./tasks.reducers";
export const rootReducer = () => {
    return combineReducers({
      tasks
    });
  };