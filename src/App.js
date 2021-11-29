import "./App.css";
import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import UserListContainer from "./containers/UserListContainer";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import history from "./history";
import { ConnectedRouter } from "connected-react-router";

function App() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/todos" exact component={Todos} />
      <Route path="/users" exact component={Users} />
    </>
  );
}

export default App;
