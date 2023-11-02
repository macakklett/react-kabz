import { addNewPostActionCreator, changeNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';


// const MyPostsContainer = (props) => {
//     return (
//     <StoreContext.Consumer>
//     {(store) => 
//       { let state = store.getState();

//         const onAddNewPost = () => {
//           store.dispatch(addNewPostActionCreator());
//         }

//         const onChangeNewPost = (text) => {
//           store.dispatch(changeNewPostActionCreator(text));
//         }

//         return (
//           <MyPosts 
//             state={state.profilePage} 
//             addNewPost={onAddNewPost} 
//             changeNewPost={onChangeNewPost}/>
//         )
//     }
      
//     }
//     </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNewPost: () => {
      dispatch(addNewPostActionCreator());
    },

    onChangeNewPost: (text) => {
      dispatch(changeNewPostActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;