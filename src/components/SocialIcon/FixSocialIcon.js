import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import styled from "styled-components";
import './FixSocialIcon.css';

const Social = styled.div`
  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2rem;
    color: rgb(119, 119, 121);
    transition: 0.2s ease-in;
    &:hover {
      color: rgb(57, 134, 250);
    }
  }
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
function FixSocialIcon() {
  return (
    <Social className="main-menu">
      <li className="nav-li">
        <a href="https://github.com/dongnvsince1999/"
          target="_blank"
          className="nav-link"
          rel="noopener noreferrer">
          <FaGithub className="fa-2x" />
          <div className="nav-text">
            <b>Github</b>
            <div>
              dongnvsince1999
            </div>
          </div>
        </a>
      </li>

      <li className="nav-li">
        <a
          href="mailto:dongnv.since1999@gmail.com"
          target="_blank"
          className="nav-link"
          rel="noopener noreferrer">
          <IoIosMail className="fa-2x" />
          <div className="nav-text">
            <b>Gmail</b>
            <div > dongnv.since1999@gmail.com
            </div>
          </div>
        </a>
      </li>

      <li className="nav-li">
        <a
          href="https://www.facebook.com/profile.php?id=100024742350400"
          target="_blank"

          rel="noopener noreferrer">
          <FaFacebook className="fa-2x" />
          <div className="nav-text">
            <b>Facebook</b>
            <div > Nguyễn Văn Đông
            </div>
          </div>
        </a>
      </li>
    </Social>
  );
}

export default FixSocialIcon;
