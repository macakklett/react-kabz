import s from './Profile.module.css'
import topImg from './screen-mockups.svg';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return(
        <div className={s.content}>
        <div>
          <img src={topImg} alt='imag-top' className={s.top} />
        </div>
          <ProfileInfo />
          <MyPosts posts={props.posts}/>
      </div>
    );
}

export default Profile;