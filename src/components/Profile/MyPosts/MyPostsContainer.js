import { addNewPostActionCreator, changeNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';




const MyPostsContainer = (props) => {
  let state = props.store.getState();

  const onAddNewPost = () => {
    props.store.dispatch(addNewPostActionCreator());
  }

  const onChangeNewPost = (text) => {
    props.store.dispatch(changeNewPostActionCreator(text));
  }

    return <MyPosts state={state.profilePage} addNewPost={onAddNewPost} changeNewPost={onChangeNewPost}/>
}

export default MyPostsContainer;