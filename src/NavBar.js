import { NavLink } from "react-router-dom";
import "./navBar.css";
import logo from "./assets/logo_size_invert.jpg";

const NavBar = ({ reicpes }) => {
  return (
    <nav className="navBar">
      <img className="logo" src={logo} alt="logo" />
      <NavLink activeclassname="active" to="/">
        Home
      </NavLink>
      <NavLink to="/dishes" state="Germany">
        Countries
      </NavLink>
    </nav>
  );
};

export default NavBar;
