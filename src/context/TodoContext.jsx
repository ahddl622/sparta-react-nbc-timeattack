import { createContext, useState } from "react";
import { defaultTodos } from "../static/todos";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(defaultTodos);

  const onSubmitTodo = (nextTodo) => {
    setTodos((prevTodos) => [nextTodo, ...prevTodos]);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        onSubmitTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider
// SECTION: 4번 문제
// TODO: TodoProvider 컴포넌트 작성
// NOTE: `TodoContext.Provider` 컴포넌트로 `props.children`을 감싸서 반환
// HINT: `props`로 `value`를 전달
