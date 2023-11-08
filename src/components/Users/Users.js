import React from 'react';
import styles from './Users.module.css';
import userAva from './image-emily.jpg';
import axios from 'axios';

class Users extends React.Component {
    constructor(props) {
        super(props);
        
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
             .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
        <div>
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
