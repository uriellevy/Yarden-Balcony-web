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
          אני אסף, נולדתי וגדלתי בירושלים, יותר מדויק – בשוק מחנה יהודה, לאבי
          ז״ל הייתה בסטה וותיקה רבת שנים, ולצד האווירה, עוברי האורח, ושאר אנשי
          המקום למדתי מה זה הדבר הזה שגורם לאנשים להרגיש בליבם חום. את הבסטה
          הנודדת שלי הקמתי מתוך אותה תחושה של אהבה, והרצון לשמח אנשים, לחגוג את
          החיים בפשטות והנאה לכל אירוע אני מביא איתי את הצוות הכי מקצועי, חומרי
          הגלם הכי משובחים, ובפנים גם כלולים הסטוריז לאינסטוש (מילה שלי שצאו לכם
          הכי יפים) בואו להציץ באינסטגרם שלי. אההה וכמעט שכחתי לספר – האירועים
          נתפרים לפי מידותיכם האישיות. ביחד נרכיב תפריט של השמחות עם כל מה שתרצו
          וכל מה שדמיינתם בחלומות, בואו נדבר שתוכלו להבין יותר!
        </p>
      </div>
    </div>
  );
};

export default About;
