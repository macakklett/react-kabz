import { createRef } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
  // debugger;

  let postElements = props.state.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

  let newPostElement = createRef();

  const onAddNewPostHandler = () => {
    props.addNewPost();
  }

  const onChangeNewPostHandler = () => {
    let text = newPostElement.current.value;
    props.changeNewPost(text);
  }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
              <div>
                <div><textarea ref={newPostElement} value={props.state.textareaByDefault} onChange={onChangeNewPostHandler} /></div>
                <div><button onClick={onAddNewPostHandler}>Add Post</button></div>
              </div>
              <div className={s.posts}>
                {postElements}
              </div>
            </div>
          </div>
    );
}

export default MyPosts;