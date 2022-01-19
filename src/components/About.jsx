import React from "react";
import "./styles/About.scss";
import { MdOutlinePhotoCameraFront } from "react-icons/md";

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <MdOutlinePhotoCameraFront className="about-icon" />
        <h1 className="about-title">?מי אני </h1>
      </div>
      <div className="about-content">
        <p>
          אני ירדן אדרי, שף בשרים כבר מעל 5 שנים.התחלתי את ערבי הבשר מתוך אותה
          תחושה של אהבה, רצון לעשות שמח לאנשים ולחגוג את החיים בפשטות והנאה. לכל
          אירוע אני מביא איתי תשוקה ונסיון רב ואת חומרי הגלם הכי משובחים. אההה
          וכמעט שכחתי לספר – האירועים נתפרים לפי מידותיכם האישיות. ביחד נרכיב
          תפריט של השמחות עם כל מה שתרצו וכל מה שדמיינתם בחלומות, בואו נדבר
          שתוכלו להבין יותר
        </p>
      </div>
    </div>
  );
};

export default About;
