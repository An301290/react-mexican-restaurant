import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./Navbar.Style";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">Tacos</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
