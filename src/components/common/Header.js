import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav>
            <Link to="/" activeClassName="active">Home</Link>
            {" | "}
            <Link to="/login" activeClassName="active">Login</Link>
        </nav>
    );
};

export default Header;
