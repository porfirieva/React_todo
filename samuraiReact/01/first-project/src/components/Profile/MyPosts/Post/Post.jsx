import style from "./Post.module.css"

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src="https://n1s1.hsmedia.ru/85/64/3f/85643f2e03be52b0bc00cb0f60b12f31/728x546_1_76d11b54618da2bff71c051801a697db@1441x1081_0xac120003_18866572441655464119.jpeg" alt="avavtar" />
      { props.message }
    </div>
  )
}

export default Post;
