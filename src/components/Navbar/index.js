import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {
  NavLink,
  BarsHome,
  BarsAbout,
  BarsContact,
  BarsProjects,
  NavMenu,
  NavLogo,
} from './NavbarElements';

const Navbar = () => {
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    };
  }, []);

  return (
    <>
      <nav className={`nav ${show}`}>
        <NavLogo to="/">
          <h1>Iago Medeiros</h1>
        </NavLogo>
        <Link to="/about" activeStyle>
          <BarsAbout />
        </Link>
        <BarsHome />
        <BarsProjects />
        <BarsContact />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </nav>
    </>
  );
};

export default Navbar;
