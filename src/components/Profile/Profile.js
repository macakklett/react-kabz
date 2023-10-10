import s from './Profile.module.css'
import topImg from './screen-mockups.svg';
import foto from './image-jennie.jpg';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
        <div className={s.content}>
        <div><img src={topImg} alt='imag-top' className={s.top} /></div>
        <div>
          <img src={foto} alt='photographia' />
          <div>
            ava + description
          </div>
          <MyPosts />
        </div>
      </div>
    );
}

export default Profile;