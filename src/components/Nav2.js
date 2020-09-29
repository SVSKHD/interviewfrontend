import React, { useState,Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import {Link, withRouter} from "react-router-dom"
import { signout,isAutheticated } from '../auth/helper';

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const NAV2 = ({history}) => {

  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbarextends1">
    <div className="navbar2">
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbarextends1" navbar>
           {!isAutheticated() && (
              <Fragment>
              <NavItem className="NS">
              <Link to="/signup">
                <Button color="danger" > Signup</Button>
              </Link>
              </NavItem>
  
              <NavItem className="NS">
                <Link to="/signin">
                <Button color="success" to="/signin"> Signin</Button>
                </Link>
              </NavItem>
              </Fragment>
           )}
            <NavItem>
             {isAutheticated() && (
               <Button onClick={()=>{
                 signout(()=>{
                    history.push("/")
                 })
                }} color="warning">Signout</Button>
             )}}
             </NavItem>
    
            {isAutheticated() && isAutheticated().user.role===0 &&(
              <NavItem className="NS">
              <Link to="/user/dashboard">
              <Button>Dashboard</Button>
              </Link>
            </NavItem>
            )}
           {isAutheticated() && isAutheticated().user.role===1 &&(
              <NavItem className="NS">
              <Link to="/admin/dashboard">
              <Button>Admin</Button>
              </Link>
            </NavItem>
            )}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    </div>
  );
}

export default withRouter(NAV2);
