import "./Todo.modules.css";
const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id)); //удаление элемента по id
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed, //cмена статуса выполненности задачи
          };
        }
        return item;
      })
    );
  };
  return (
    //возвращаем тудушку, по клику на "готово" добавляем класс, обозначающий статус готовности
    <div className="todo">
      <li className={`todo__item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="btn complete">
        Готово
      </button>
      <button onClick={deleteHandler} className="btn delete">
        Удалить
      </button>
    </div>
  );
};

export default Todo;
