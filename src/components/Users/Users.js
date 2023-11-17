import React from 'react';
import styles from './Users.module.css';
import userAva from './image-emily.jpg';

const Users = (props) => {

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
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
                        className={props.currentPage === page ? styles.selectedPage : ""}
                        onClick={() => props.onPageChanged(page)}>
                        {page}
                    </span>)
                })}
            </div>

            {props.users.map((user) => {
                return <div className={styles.user} key={user.id}>
                        <div className={styles.userCard}>
                            <div><img src={userAva} alt='somebody avatar'></img></div>
                            
                                {user.followed ? 
                                    <button onClick={() => props.unfollow(user.id)}>Follow</button> : 
                                    <button onClick={() => props.follow(user.id)}>Unfollow</button>
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

export default Users;
