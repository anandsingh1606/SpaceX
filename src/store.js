import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import LauncesReducer from "./modules/Launches/Launches.reducer";

const reducer = combineReducers({
  launces: LauncesReducer,
});

const appStore = createStore(reducer, applyMiddleware(thunk));

export default appStore;
