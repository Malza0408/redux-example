import { useRef } from "react";

// presentational component
export default function TodoForm({ add }) {
  const inputRef = useRef();
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );

  function click() {
    add(inputRef.current.value);
  }
}
