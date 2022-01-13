import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="navbar sticky-top navbar-expand-md navbar-light">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dishes">Countries</NavLink>
        </nav>
        
    )
}

export default NavBar;