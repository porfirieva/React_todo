import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={`${style.item} ${style.active}`}>
        <a href="#x">Profile</a>
      </div>
      <div className={style.item}>
        <a href="#x">Messages</a>
      </div>
      <div className={style.item}>
        <a href="#x">News</a>
      </div>
      <div className={style.item}>
        <a href="#x">Music</a>
      </div>
      <div className={style.item}>
        <a href="#x">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
