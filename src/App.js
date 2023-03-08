import "./App.css";
import { useState } from "react";
import { FormCreator } from "./components/todo-creator/todo-creator";
import { TodoItem } from "./components/todo-item/todo-item";

function App() {
  let [todos, setTodos] = useState([]);
  let [completed, setCompleted] = useState([]);

  const addTodo = (title) => {
    setTodos([...todos, { title }]);
  };

  const removeFromTodos = (index, column, moveTodo) => {
    return () => {
      column.splice(index, 1);
      moveTodo([...column]);
    };
  };

  const renameTodo = (index, column, updateFunction) => {
    return (title) => {
      column[index].title = title;
      updateFunction([...column]);
    };
  };

  const moveToDone = (index, removeFun, addFun) => {
    return () => {
      const [todo] = todos.splice(index, 1);
      addFun([...completed, todo]);
      removeFun([...todos]);
    };
  };

  return (
    <div className="App">
      <h1>Todo app</h1>
      <hr />

      <FormCreator createTodo={addTodo} />
      <div className="columns">
        <div className="column">
          <h1>Todo</h1>
          {todos.map((todo, index) => {
            return (
              <TodoItem
                title={todo.title}
                checkItem={false}
                removeItem={removeFromTodos(index, todos, setTodos)}
                changeTodoTitle={renameTodo(index, todos, setTodos)}
                moveItem={moveToDone(index, setTodos, setCompleted)}
              />
            );
          })}
        </div>
        <div className="column">
          <h1>Done</h1>
          {completed.map((todo, index) => {
            return (
              <TodoItem
                title={todo.title}
                checkItem={true}
                removeItem={removeFromTodos(index, completed, setCompleted)}
                changeTodoTitle={renameTodo(index, completed, setCompleted)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
