import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = ({ name, id }) => {
  return (
    <li className={style.dialog}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </li>
  );
};

export default Dialog;
