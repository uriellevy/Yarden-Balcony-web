import React from "react";
import "./styles/Hero.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="hero-container" id="hero">
      <h1 className="hero-title">שף בשרים ירדן אדרי</h1>
      <Typewriter
        className="hero-typewriter"
        onInit={(typewriter) => {
          typewriter
            .typeString("חווית בשרים עד למרפסת שלכם")
            .pauseFor(2000)
            .deleteChars(14)
            .pauseFor(2000)
            .typeString("במעשנה")
            .start();
        }}
      />
      <p className="hero-para">
        אני גריל שף אסף סבח וזו הבסטה הנודדת שלי: יחד אנחנו מגיעים עד אליכם
        היישר משוק מחנה יהודה הירושלמי, מעמיסים את כל הטוב שיש לשוק להציע,
        ירקות, תבלינים, ריחות ואווירה עד לאירוע: חגיגת בשרים שכמוה עוד לא נראתה!
      </p>
      <div className="hero-btns">
        <button className="hero-btn hero-btn-1"> צרו קשר עכשיו</button>
        <button className="btn hero-btn  hero-btn-2"> גלריה מהמרפסת</button>
      </div>
    </div>
  );
};

export default Hero;
