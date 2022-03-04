import React from 'react';
import {
  Nav,
  NavLink,
  BarsHome,
  BarsAbout,
  BarsContact,
  BarsProjects,
  NavMenu,
  NavLogo,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          <h1>Iago Medeiros</h1>
        </NavLogo>
        <BarsAbout />
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
      </Nav>
    </>
  );
};

export default Navbar;
