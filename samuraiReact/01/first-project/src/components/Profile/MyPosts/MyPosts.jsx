import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
	return (
		<div>
			My MyPosts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className={style.posts}>
				<Post message={props.message} likeCount={props.likeCount} />
			</div>
		</div>
	);
};

export default MyPosts;
