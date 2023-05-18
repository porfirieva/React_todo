import style from "./TodoList.module.css";
import Todo from "./Todo.jsx";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul className={style.list}>
      {todos.map((todo) => (
        <Todo
          setTodos={setTodos}
          todo={todo}
          todos={todos}
          key={todo.id}
          text={todo.text}
        />
      ))}
    </ul>
  );
};

export default TodoList;
