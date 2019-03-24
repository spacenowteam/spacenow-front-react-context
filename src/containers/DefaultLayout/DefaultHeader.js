import React from "react";
import { NavLink } from "react-router-dom";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem
} from "reactstrap";

import { AppNavbarBrand, AppHeaderDropdown, AppAsideToggler } from "../CoreUI";

import logo from "../../assets/img/brand/spacenow-logo.svg";
import pin from "../../assets/img/brand/spacenow-pin.svg";

const DefaultHeader = props => {

        // eslint-disable-next-line
        const { children, ...attributes } = props;

        return (
          <React.Fragment>
            <AppNavbarBrand
              full={{ src: logo, width: 155, height: 55, alt: "CoreUI Logo" }}
              minimized={{ src: pin, width: 89, height: 25, alt: "CoreUI Logo" }}
            />
            <Nav className="d-md-down-none ml-auto" navbar>
              <NavItem className="px-3">
                <NavLink to="/listing">List your space</NavLink>
              </NavItem>
              <NavItem className="px-3">
                <NavLink to="/dashboard">Sign In</NavLink>
              </NavItem>
              <NavItem className="px-3">
                <NavLink to="/">Sign Up</NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              <NavItem className="d-md-down-none">
                <NavLink to="/">
                  <i className="fa fa-bell" />
                  <Badge pill color="danger">
                    5
                  </Badge>
                </NavLink>
              </NavItem>
              <AppHeaderDropdown direction="down">
                <DropdownToggle nav>
                  <img
                    src={"../../assets/img/avatars/6.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                </DropdownToggle>
                <DropdownMenu right style={{ right: "auto" }}>
                  <DropdownItem header tag="div" className="text-center">
                    <strong>Account</strong>
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fa fa-bell-o" /> Updates
                    <Badge color="info">42</Badge>
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fa fa-envelope-o" /> Messages
                    <Badge color="success">42</Badge>
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fa fa-tasks" /> Tasks
                    <Badge color="danger">42</Badge>
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fa fa-comments" /> Comments
                    <Badge color="warning">42</Badge>
                  </DropdownItem>
                  <DropdownItem header tag="div" className="text-center">
                    <strong>Settings</strong>
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fa fa-user" /> Profile
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fa fa-wrench" /> Settings
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fa fa-usd" /> Payments
                    <Badge color="secondary">42</Badge>
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fa fa-file" /> Projects
                    <Badge color="primary">42</Badge>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <i className="fa fa-shield" /> Lock Account
                  </DropdownItem>
                  <DropdownItem onClick={e => props.onLogout(e)}>
                    <i className="fa fa-lock" /> Logout
                  </DropdownItem>
                </DropdownMenu>
              </AppHeaderDropdown>
            </Nav>
            {/* <AppAsideToggler className="d-md-down-none" />
      <AppAsideToggler className="d-lg-none" mobile /> */}
          </React.Fragment>
        );

    }

export default DefaultHeader;
