import React, { useState } from "react";
import "./styles/Navbar.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineHome, AiOutlineLike } from "react-icons/ai";
import { GiMeatCleaver } from "react-icons/gi";
import { RiGalleryLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [showbar, setShowbar] = useState(false);

  const showHandler = () => {
    setShowbar(true);
  };
  const closeHandler = () => {
    setShowbar(false);
  };
  console.log(showbar);
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img
          src={require("../img/logo/במרפסת של ירדן-logos_white.png")}
          className="logo"
        />
      </div>
      <BiMenuAltRight
        className={showbar ? "none" : "nav-bars"}
        onClick={showHandler}
      />
      <ul className="nav-ul">
        <li className="nav-list-item">
          <a href="#hero" className="nav-link">
            עמוד ראשי
          </a>
        </li>

        <li className="nav-list-item">
          <a href="#gallery" className="nav-link">
            גלריה
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#testimonials" className="nav-link">
            ממליצים
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#" className="nav-link">
            בלה בלה
          </a>
        </li>
      </ul>
      <ul
        className={showbar ? "nav-mobile-active" : "nav-mobile-active hidden"}
      >
        <ImCross className="mobile-cross" onClick={closeHandler} />
        <li className="mobile-list-item">
          <a href="#hero" className="mobile-link">
            עמוד ראשי
          </a>
          <AiOutlineHome className="mobile-icons" />
        </li>
        <li className="mobile-list-item">
          <a href="#gallery" className="mobile-link">
            גלריה
          </a>
          <RiGalleryLine className="mobile-icons" />
        </li>
        <li className="mobile-list-item">
          <a href="#testimonials" className="mobile-link">
            ממליצים
          </a>
          <AiOutlineLike className="mobile-icons" />
        </li>
        <li className="mobile-list-item">
          <a href="#" className="mobile-link">
            בלה בלה
          </a>
          <GiMeatCleaver className="mobile-icons" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
