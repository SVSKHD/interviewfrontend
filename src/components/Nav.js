import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink,Button } from 'reactstrap';
import {FaShoppingCart} from "react-icons/fa"
import {Link} from "react-router-dom"

const NAV1 = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="navbarextends" >
      <Navbar light>
        <Link to="/" >
        <NavbarBrand  className="mr-auto">NextClick</NavbarBrand>
       </Link>
       <Button outline color="dark" onClick={toggleNavbar} className="mr-2"><FaShoppingCart size={28}/></Button>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Collections</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Categories</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NAV1;
