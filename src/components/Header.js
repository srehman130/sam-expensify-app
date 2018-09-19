import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
    <div className="container">
        <h1 className="header__title">Expensify</h1>
        <nav className="header__navbar">
            <NavLink to="/" className="header__navbar__inactive" activeClassName="header__navbar__active" exact={true}>Home Page </NavLink>
            <NavLink to="/create" className="header__navbar__inactive" activeClassName="header__navbar__active">Create </NavLink>
            <NavLink to="/help" className="header__navbar__inactive" activeClassName="header__navbar__active">Help </NavLink>
        </nav>
    </div>
    </header>
);

export default Header;
