import style from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <ul className={style.list}>
        <li className={style.name}>Ksu</li>
        <li className={style.name}>Pasha</li>
        <li className={style.name}>Vanya</li>
      </ul>
      <ul className={style.messeges}>
        <li className={style.messege}>Hello!</li>
        <li className={style.messege}>How are u?</li>
        <li className={style.messege}>Hi!</li>
      </ul>
    </div>
  )
};

export default Dialogs;
