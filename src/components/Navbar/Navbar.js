import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Masegess</NavLink>
      </div>
      <div>
        <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
      </div>
      <div className={s.item}>
        <a href="h#">News</a>
      </div>
      <div className={s.item}>
        <a href="h#">Music</a>
      </div>
      <div className={s.item}>
        <a href="h#">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
