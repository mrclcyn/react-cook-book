import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dishes">Countries</NavLink>
            
        </div>
    )
}

export default NavBar;