import style from "./Dialogs.module.css";

const Message = ({ message }) => {
  return <li className={style.message}>{message}</li>;
};

export default Message;
