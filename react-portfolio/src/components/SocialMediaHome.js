import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

import "../Socialmediabanner.css";
function SocialMediaHome() {
  return (
    <ul className="banner-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/bakhtiarcr7"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  banner-social-icons"
        >
          <AiFillGithub className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/bakhtiarhussain/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  banner-social-icons"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </li>
      {/* <li className="social-icons">
        <a
          href="https://www.instagram.com/sunil.yadav84/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour banner-social-icons"
        >
          <AiFillInstagram className="social-icon" />
        </a>
      </li> */}
      <li className="social-icons">
        <a
          href="mailto:bakhtiarhussain123@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour banner-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMediaHome;
