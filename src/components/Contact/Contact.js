import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle" style={{ marginBottom: "16px" }}> <div style={{ display: "inline", borderBottom: "3px solid #0068ff" }}>Get In</div> Touch</div>
        <div className="BigCard">
          <Email>
            <span>dongnv.since1999@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:dongnv.since1999@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
