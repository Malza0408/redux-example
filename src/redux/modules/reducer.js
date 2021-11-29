import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import history from "../../history";
import filter from "./filter";
import todos from "./todos";
import users from "./users";

const reducer = combineReducers({
  todos,
  filter,
  users,
  router: connectRouter(history),
});

export default reducer;
