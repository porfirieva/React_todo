import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
	// debugger;
	let post = props.state.posts.map(post => (
		<MyPosts message={post.message} likeCount={post.likeCount} />
	));

	return (
		<div className={style.content}>
			<div className={style.pageCover}>
				<img
					className={style.pageCover__img}
					src="http://www.wenstourism.com/wp-content/uploads/2018/01/img-world-of-adventure-9.jpg"
					alt="somePhoto"
				></img>
			</div>
			<ProfileInfo />
			{post}
		</div>
	);
};

export default Profile;
