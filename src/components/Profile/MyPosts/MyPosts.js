import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
              <div>
                <textarea></textarea>
                <button>Add Post</button>
              </div>
              <div className={s.posts}>
                <Post message='Hello, how are you' colLikes={3}/>
                <Post message='Very good' colLikes={6}/>
                <Post message='not know about it' colLikes={4}/>
                <Post message='it`s cool' colLikes={9}/>
              </div>
            </div>
          </div>
    );
}

export default MyPosts;