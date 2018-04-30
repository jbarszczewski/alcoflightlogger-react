import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        <nav>
            <Link to="/" activeclassname="active">Home</Link>
            {" | "}
            <Link to="/login" activeclassname="active">Login</Link>
        </nav>
    );
};

export default Menu;
