import React from "react";
import "./styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img
          src={require("../img/logo/במרפסת של ירדן-logos_white.png")}
          className="logo"
        />
      </div>
      <ul className="nav-ul">
        <li className="nav-list-item">כותרת </li>
        <li className="nav-list-item">עוד דברים</li>
        <li className="nav-list-item">עוד כותרות</li>
        <li className="nav-list-item">בלה בלה</li>
      </ul>
    </div>
  );
};

export default Navbar;
