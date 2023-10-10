import s from './Post.module.css';
import fotoCard from './image-thomas.jpg';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={fotoCard} alt='user face' />
            {props.message}
            <div>
                Like {props.colLikes}
            </div>
        </div>
    );
}

export default Post;