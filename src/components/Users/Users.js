import React from 'react';
import styles from './Users.module.css';
import userAva from './image-emily.jpg';
import axios from 'axios';

class Users extends React.Component {
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

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
            <div className={styles.count}>
                {pages.map(page => {
                    return (
                    <span 
                        className={this.props.currentPage === page && styles.selectedPage}
                        onClick={() => this.onPageChanged(page)}>
                        {page}
                    </span>)
                })}
            </div>

            {this.props.users.map((user) => {
                return <div className={styles.user} key={user.id}>
                        <div className={styles.userCard}>
                            <div><img src={userAva} alt='somebody avatar'></img></div>
                            
                                {user.followed ? 
                                    <button onClick={() => this.props.unfollow(user.id)}>Follow</button> : 
                                    <button onClick={() => this.props.follow(user.id)}>Unfollow</button>
                                }
                            
                        </div>
                        <div className={styles.userData}>
                            <div className={styles.info}>
                                <div>{user.name}</div>
                                <div className={styles.status}>{'user.status'}</div>
                            </div>
                            <div className={styles.place}>
                                <div>{'user.location.country'}</div>
                                <div>{'user.location.city'}</div>
                            </div>
                        </div>
                    </div>})}
        </div>
    )}
}

export default Users;
