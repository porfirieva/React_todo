import style from "./CreateTodo.module.css";

const CreateTodo = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <div>
      <h1>Список дел</h1>
      <form className={style.form}>
        <input value={inputText} onChange={inputTextHandler} placeholder="Что делаем?" className={style.form__input}></input>
        <button onClick={submitTodoHandler} type="submit" className={style.form__btn}>
          Добавить дело
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
