import React from 'react';
import styles from './Users.module.css';
import userAva from './image-emily.jpg';

const Users = (props) => {
    // debugger;
    if(props.users.length === 0){
        props.setUsers([
                { id: 1, followed: true, fullName: 'Vasiliy', status: "Hello, how are you", location: {country: 'Ukraine', city: 'Nk'} },
                { id: 2, followed: false, fullName: 'Ignat', status: "Hello, i`m speaker of fly powers", location: {country: 'Ukraine', city: 'Zp'} },
                { id: 3, followed: true, fullName: 'Sveta', status: "Hello, i studied at the technicum", location: {country: 'Ukraine', city: 'Dp'} },
                { id: 4, followed: false, fullName: 'Nadya', status: "Hello, i`m very smart", location: {country: 'Ukraine', city: 'Kv'} }
            ]
        )
    }
    return <div>
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
                                <div>{user.fullName}</div>
                                <div className={styles.status}>{user.status}</div>
                            </div>
                            <div className={styles.place}>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </div>
                        </div>
                    </div>})}
    </div>
}

export default Users;