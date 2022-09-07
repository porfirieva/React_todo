import style from "./Dialogs.module.css";
import Dialog from "./Dialog";
import Message from "./Message";

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <ul className={`${style.list} list-reset`}>
        <Dialog name="Ksu" id="1" />
        <Dialog name="Vanya" id="2" />
        <Dialog name="Pasha" id="3" />
        <Dialog name="Masha" id="4" />
      </ul>
      <ul className={`${style.messages} list-reset`}>
        <Message message="Hi!" />
        <Message message="Hello!" />
        <Message message="How are u?" />
        <Message message="Why?" />
      </ul>
    </div>
  );
};

export default Dialogs;
