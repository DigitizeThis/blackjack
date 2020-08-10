import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    NavLink
} from 'reactstrap';

import logo from '../../logo.svg';

interface Props {
}

const Header = (props:Props ) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <header>
            <Navbar color="faded" light className="navbar navbar-dark bg-dark box-shadow">
                <Collapse isOpen={!collapsed} navbar>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4 className="text-white">About BlackJack</h4>
                                <p className="lead text-muted"><small>Welcome to Blackjack, also known to some as twenty-one. We hope this easy to use, simple Blackjack game will certainly become your new favorite app</small></p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-white">Contact</h4>
                                <ul className="list-unstyled">
                                    <li><a href="https://www.brighttalk.com/" target="_blank" rel="noopener noreferrer" className="text-white">Visit BrightTalk</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>                    
                </Collapse>
                <NavbarBrand href="/" className="mr-auto navbar-brand d-flex align-items-center">
                    <img className="img-fluid" src={logo} width="45%" height="auto" alt="BlackJack" />
                </NavbarBrand>
                <NavItem>
                    <NavLink href="/" className="nav-item nav-link px-2 mr-4 text-warning">
                        <i className="fas fa-dice"></i> Return
                    </NavLink>
                </NavItem>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                
            </Navbar>
        </header>
    );
}

export default Header;
