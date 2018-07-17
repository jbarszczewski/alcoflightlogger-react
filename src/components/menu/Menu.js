import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Menu = () => {
    return (
        <div>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link id="logo" to="/" activeclassname="active">afl</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/flights">
                            <NavItem id="flights" eventKey={1}>flights</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <NavItem id="login" eventKey={2}>log in</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menu;
