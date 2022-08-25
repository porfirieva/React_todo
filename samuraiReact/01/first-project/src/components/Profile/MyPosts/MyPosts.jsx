import style from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My MyPosts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message="Hi! How are u?"/>
        <Post message="Hey like me"/>
      </div>
    </div>
  )
}

export default MyPosts;
