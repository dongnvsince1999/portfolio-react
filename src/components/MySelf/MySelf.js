import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import profile from "../../assets/profile.png";
import scrolldown from '../../assets/scroll-down.svg'
import './MySelf.css';

import {
  MySelfContainer,
  MySelfWrapper,
  MySelfLeft,
  MySelfRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./MySelfElements";

function MySelf() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <MySelfContainer>
        <MySelfWrapper>
          <MySelfLeft>
            <div className="greet-text">Hi, I am</div>
            <div className="my-name">
              NGUYEN VAN <span style={{ color: "#0068ff" }}>DONG</span>
            </div>
            <div className="my-name" style={{ fontSize: "20px", marginTop: "0px", marginLeft: "1px" }}>Frontend Developer</div>
            <p style={{ color: "#363636" }}  >
              Experienced front-end developer, curious about product architectures of large companies. <br />
              Desire to contribute to useful open source.
            </p>
            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
              <div style={{ height: "3px", marginTop: "10px", background: "#0068ff", width: "50%", position: "relative" }}></div>
            </div>
          </MySelfLeft>
          <MySelfRight>
            <Image
              src={profile}
              alt="profile"
            />
          </MySelfRight>
        </MySelfWrapper>
        <ScrollDown to="projects">
          <div style={{ marginBottom: "-90px " }} >
            <ScrollLink>
              Scroll down
              <img
                src={scrolldown}
                alt="scroll-down"
              />
            </ScrollLink>
          </div>

        </ScrollDown>
      </MySelfContainer>
    </main>
  );
}

export default MySelf;
