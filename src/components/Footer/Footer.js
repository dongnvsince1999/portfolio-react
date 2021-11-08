import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import { NavLink } from './FooterElement';
import styled from "styled-components";

const FooterSection = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: relative;
  span {
    position: absolute;
    bottom: 4rem;
    color: #0068ff;
    a {
      text-decoration: underline;
    }
  }
`;

export default class Footer extends React.Component {
    render() {
        return (
            <FooterSection>
                <footer class="footer" id="footer">
                    <div class="container">
                        <div class="row" style={{ paddingBottom: "20px" }}>
                            <div class="footer-logo">
                                <img src={logo} class="img-fluid" alt="" style={{ width: "120px", height: "auto" }} />
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="widget2">
                                    <div class="widget3">
                                        <h5>
                                            Contact
                                        </h5>
                                        <ul>
                                            <li> <i class="fas fa-envelope fa-flip-horizontal" style={{ marginRight: "5px", marginBottom: "5px" }}></i>Email: dongnv.since1999@gmail.com </li>
                                            <li> <i class="fas fa-phone fa-flip-horizontal" style={{ marginRight: "5px" }}></i>Phone number: 036 507 1855 </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-2">
                                <div class="widget5">
                                    <h5>
                                        Quick Links
                                    </h5>
                                    <ul>
                                        <NavLink to="projects">
                                            Projects
                                        </NavLink>
                                        <NavLink to="about">
                                            About me
                                        </NavLink>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="copyRightArea">
                        <div class="container">
                            <div class="row" style={{ background: "none", boxShadow: "none", borderLeft: "none" }} >
                                <div class="col-12 text-center" >
                                    <p style={{ color: "#fff", paddingBottom: "5px", width: "fit-content" }}>Made by Tesla with love!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer >
            </FooterSection>
        );
    }
}