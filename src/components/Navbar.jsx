import React, { useState } from "react";
import "./styles/Navbar.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineHome, AiOutlineLike } from "react-icons/ai";
import { GiMeatCleaver } from "react-icons/gi";
import { RiGalleryLine, RiContactsFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";

const Navbar = ({ navbar, setNavbar }) => {
  const [showbar, setShowbar] = useState(false);

  const showHandler = () => {
    setShowbar(true);
  };
  const closeHandler = () => {
    setShowbar(false);
  };

  const backgroundChangeHandler = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 550) {
      setNavbar(true);
    } else setNavbar(false);
  };

  window.addEventListener("scroll", backgroundChangeHandler);

  return (
    <div className={navbar ? "nav-container active" : "nav-container"}>
      <div className="nav-logo">
        <a href="#hero">
          <img
            src={require("../img/logo/במרפסת של ירדן-logos_white.png")}
            className="logo"
          />
        </a>
      </div>

      <ul className="nav-ul">
        <li className="nav-list-item">
          <a href="#hero" className="nav-link">
            עמוד ראשי
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#services" className="nav-link">
            מה בתפריט
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
      </ul>
      <BiMenuAltRight
        className={showbar ? "none" : "nav-bars"}
        onClick={showHandler}
      />
      <ul
        className={showbar ? "nav-mobile-active" : "nav-mobile-active hidden"}
      >
        <ImCross className="mobile-cross" onClick={closeHandler} />
        <li className="mobile-list-item">
          <a href="#hero" className="mobile-link" onClick={closeHandler}>
            עמוד ראשי
          </a>
          <AiOutlineHome className="mobile-icons" />
        </li>
        <li className="mobile-list-item">
          <a href="#services" className="mobile-link" onClick={closeHandler}>
            מה בתפריט
          </a>
          <GiMeatCleaver className="mobile-icons" />
        </li>
        <li className="mobile-list-item">
          <a href="#gallery" className="mobile-link" onClick={closeHandler}>
            גלריה
          </a>
          <RiGalleryLine className="mobile-icons" />
        </li>

        <li className="mobile-list-item">
          <a
            href="#testimonials"
            className="mobile-link"
            onClick={closeHandler}
          >
            ממליצים
          </a>
          <AiOutlineLike className="mobile-icons" />
        </li>

        <li className="mobile-list-item">
          <a href="#contact" className="mobile-link" onClick={closeHandler}>
            צור קשר
          </a>
          <RiContactsFill className="mobile-icons" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
