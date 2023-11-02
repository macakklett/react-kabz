import { addNewPostActionCreator, changeNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = (props) => {
    return (
    <StoreContext.Consumer>
    {(store) => 
      { let state = store.getState();

        const onAddNewPost = () => {
          store.dispatch(addNewPostActionCreator());
        }

        const onChangeNewPost = (text) => {
          store.dispatch(changeNewPostActionCreator(text));
        }

        return (
          <MyPosts 
            state={state.profilePage} 
            addNewPost={onAddNewPost} 
            changeNewPost={onChangeNewPost}/>
        )
    }
      
    }
    </StoreContext.Consumer>
    )
}

export default MyPostsContainer;