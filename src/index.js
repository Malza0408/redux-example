import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { addTodo, completeTodo, showAll, showComplete } from "./redux/actions";

// 변경 사항을 구독한다. 변경이 일어날시 callback 함수를 실행시킨다.
store.subscribe(() => {
  console.log(store.getState());
});

// console.log(store);
store.dispatch(addTodo("coding"));
store.dispatch(completeTodo(0));
store.dispatch(showAll());
store.dispatch(showComplete());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
