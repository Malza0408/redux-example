import TodoFormContainer from "../containers/TodoFormContainer";
import TodoListContainer from "../containers/TodoListContainer";

export default function Todos() {
  console.log("todos");
  return (
    <div>
      <TodoListContainer />
      <TodoFormContainer />
    </div>
  );
}
