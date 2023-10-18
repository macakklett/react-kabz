import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts }) => {

  let postElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
              <div>
                <div><textarea></textarea></div>
                <div><button>Add Post</button></div>
              </div>
              <div className={s.posts}>
                {postElements}
              </div>
            </div>
          </div>
    );
}

export default MyPosts;