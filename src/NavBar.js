import { NavLink } from "react-router-dom";
import "./navBar.css";
import logo from "./assets/logo_size_invert.jpg";
import Dropdown from "react-bootstrap/Dropdown";

const NavBar = ({ reicpes }) => {
  return (
    <nav className="navBar">
      <NavLink className="logoBtn" to="/">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      <div className="countryBtns">
        <div className="navRow">
          <NavLink className="navBtn" to="/dishes" state="France">
            <span>France</span>
          </NavLink>
          <NavLink className="navBtn" to="/dishes" state="Germany">
            <span>Germany</span>
          </NavLink>
          <NavLink className="navBtn" to="/dishes" state="Iran">
            <span>Iran</span>
          </NavLink>
        </div>
        <div className="navRow">
          <NavLink className="navBtn" to="/dishes" state="Vietnam">
            <span>Vietnam</span>
          </NavLink>
          <NavLink className="navBtn" to="/dishes" state="Moldova/Romania">
            <span>Moldova</span>
          </NavLink>
          <NavLink className="navBtn" to="/dishes" state="Italy">
            <span>Italy</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
