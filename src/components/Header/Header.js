import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import profile from "../../assets/profile.png";
import logo from '../../assets/logo.png';
import './Header.css';

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <div style={{ display: "flex", flex: 1 }} >
          <img src={logo} className="header-logo" alt="" />
          <NavMenu>
            <NavLink className="menu-item" to="projects" smooth={true}>
              Projects
            </NavLink>
            <NavLink className="menu-item" to="about" smooth={true}>
              About
            </NavLink>
            <NavLink className="menu-item" to="contact" smooth={true}>
              Contact
            </NavLink>
          </NavMenu>
        </div>
        {/* <NavBtn>
          <a
            className="btn SecondarBtn" style={{ boxShadow: "none", padding: "10px 1rem", fontSize: "17px" }}
            href="https://github.com/gurupawar/"
            target="_blank"
            rel="noopener noreferrer"
          >
        My resume >>
          </a>
        </NavBtn> */}
        <Bars onClick={toggle} />
      </Nav>
    </div >

  );
};

export default Header;
