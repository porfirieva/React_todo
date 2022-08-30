import style from "./CreateTodo.module.css";

const CreateTodo = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault(); // очищаем инпут после добавления нового дела
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }, // передаем в стэйт объект
    ]);
    setInputText(""); // обновляем стейт после клика на кнопку
  };

  return (
    <div>
      <h1>Список дел</h1>
      <form className={style.form}>
        <input
          value={inputText}
          onChange={inputTextHandler} //обработчик инпута
          placeholder="Что делаем?"
          className={style.form__input}
        ></input>
        <button
          onClick={submitTodoHandler} //обработчик кнопки
          type="submit"
          className={style.form__btn}
        >
          Добавить дело
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
