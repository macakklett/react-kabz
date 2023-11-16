import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC } from "../../redux/users-reducer";
import Users from "./Users";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  // debugger;
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },

    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },

    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },

    setUsersTotalCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount));
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;