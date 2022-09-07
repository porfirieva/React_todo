import style from "./ProfileInfo.module.css";

const ProfileInfo = ({
  userName = "Ksenia Porfirieva",
  userInfo = {
    country: "Russia",
    city: "Novosibirsk",
    age: "24",
  },
}) => {
  return (
    <div>
      <div className={style.user}>
        <img
          className={style.user__avatar}
          src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="somePhoto"
        ></img>
        <div className={style.userInfo}>
          <div>{userName}</div>
          <div>{userInfo.country}</div>
          <div>{userInfo.city}</div>
          <div>{userInfo.age}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
