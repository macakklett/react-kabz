import s from './Profile.module.css'
import topImg from './screen-mockups.svg';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return(
        <div className={s.content}>
        <div>
          <img src={topImg} alt='imag-top' className={s.top} />
        </div>
          <ProfileInfo />
          <MyPostsContainer store={props.store} />
      </div>
    );
}

export default Profile;