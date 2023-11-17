import React from "react";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setUsersTotalCountAC } from "../../redux/users-reducer";
import Users from "./Users";
import { connect } from "react-redux";
import axios from 'axios';

class UsersAPIComponent extends React.Component {
  // debugger;
      componentDidMount() {
          axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
               .then(response => {
                  this.props.setUsers(response.data.items);
                  this.props.setUsersTotalCount(100);    //(response.data.totalCount);
              });
      }
  
      onPageChanged = (page) => {
          this.props.setCurrentPage(page);
          axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
               .then(response => {
                  this.props.setUsers(response.data.items);
          });
      }
  
      render() {
        return <Users
          users = {this.props.users}
          currentPage = {this.props.currentPage}
          totalUsersCount = {this.props.totalUsersCount}
          pageSize = {this.props.pageSize}
          onPageChanged = {this.onPageChanged}
          follow = {this.props.follow}
          unfollow = {this.props.unfollow}
      />}
}

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;