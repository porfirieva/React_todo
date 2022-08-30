import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";

// let userInfo = {
//   country: "Russia",
//   city: "Novosibirsk",
//   age: "24",
// };

const Profile = ({ userName = "Ksenia Porfirieva", userInfo= {
  country: "Russia",
  city: "Novosibirsk",
  age: "24", 
}}) => {
  return (
    <div className={style.content}>
      <div className={style.pageCover}>
        <img
          className={style.pageCover__img}
          src="http://www.wenstourism.com/wp-content/uploads/2018/01/img-world-of-adventure-9.jpg"
          alt="somePhoto"
        ></img>
      </div>
      <div className={style.user}>
        <img
          className={style.user__avatar}
          src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="somePhoto"
        ></img>
        <div  className={style.userInfo}>
          <div>{userName}</div>
          <div>{userInfo.country}</div>
          <div>{userInfo.city}</div>
          <div>{userInfo.age}</div>
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
