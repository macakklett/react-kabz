import { addNewPostActionCreator, changeNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

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