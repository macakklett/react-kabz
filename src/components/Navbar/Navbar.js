import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
// debugger;
  let navBar = props.navBar.map((e) => (
    <div className={s.navLink}>
      <NavLink 
        to={`/${e.navBarLink}`.toLowerCase()} 
        className = { navData => navData.isActive ? s.active : s.item }>
          {e.navBarLink}
      </NavLink>
    </div>)
  );

  return (
    <nav className={s.nav}>
      {navBar}
    </nav>
  );
};

export default Navbar;
