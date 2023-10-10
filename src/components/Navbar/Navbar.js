import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}><a href='h#'>Masegess</a></div>
            <div className={`${s.item} ${s.active}`}><a href='h#'>Profile</a></div>
            <div className={s.item}><a href='h#'>News</a></div>
            <div className={s.item}><a href='h#'>Music</a></div>
            <div className={s.item}><a href='h#'>Settings</a></div>
        </nav>
    );
}

export default Navbar;