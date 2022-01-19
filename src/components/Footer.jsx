import React from "react";
import "./styles/Footer.scss";
import { FaInstagramSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="media">
        <ul>
          <li>
            <a href="https://www.facebook.com/yarden.edri.7" target="_blank">
              <ImFacebook2 className="media-icon-1" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yardenedri7/" target="_blank">
              <FaInstagramSquare className="media-icon-2" />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p className="copyright">copyright &copy; 2021, All rights reserved</p>
        <p className="copyright">Made by Uriel Levy</p>
      </div>
    </footer>
  );
};

export default Footer;
