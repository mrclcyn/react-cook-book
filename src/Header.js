import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const Header = ({reicpes}) => {
    return(
        <Navbar>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dishes">Countries</NavLink>
        </Navbar>
        
    )
}

export default Header;