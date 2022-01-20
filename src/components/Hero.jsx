import React, { useState, useEffect } from "react";
import "./styles/Hero.css";
import Typewriter from "typewriter-effect";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";

const Hero = ({ navbar }) => {
  const [showPhone, setShowPhone] = useState(false);
  const [iconRotation, setIconRotation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconRotation((prev) => !prev);
    }, 7000);
    return () => clearInterval(interval);
  }, [iconRotation]);
  // console.log(iconRotation);

  const showPhoneHandler = () => {
    setShowPhone(true);

    setTimeout(() => {
      setShowPhone(false);
    }, 15000);
    console.log(showPhone);
  };

  return (
    <div className="hero-container" id="hero">
      <h1 className="hero-title">שף בשרים ירדן אדרי</h1>
      <Typewriter
        className="hero-typewriter"
        onInit={(typewriter) => {
          typewriter
            .typeString("חווית בשרים שלא תשכחו עד למרפסת שלכם")
            .pauseFor(2000)
            .deleteAll()
            // .deleteChars(14)
            .pauseFor(2000)
            .typeString("תפריט בשרים מותאם לחזון שלכם")
            .pauseFor(2000)
            .deleteChars(16)
            .pauseFor(1500)
            .typeString("במעשנה")
            .deleteAll()
            .typeString("איש של בשר")
            .start();
        }}
      />
      {/* <p className="hero-para">
        אני גריל שף ירדן אדרי ובשר זאת האהבה הגדולה שלי בחיים. אני מאמין שערב
        טוב חייב להסתיים עם בשר איכותי וכוס יין אדום
      </p> */}
      <div className="hero-btns">
        <a href="#contact" className="hero-btn hero-btn-1">
          {" "}
          צרו קשר עכשיו
        </a>

        <a href="#gallery" className="btn hero-btn  hero-btn-2">
          גלריה מהמרפסת
        </a>
      </div>

      <a href="https://wa.me/972546888735" target="”_blank”">
        <BsWhatsapp
          className={iconRotation ? "hero-whatsapp rotate" : "hero-whatsapp"}
        />
      </a>
      <div className="hero-phone" onClick={showPhoneHandler}>
        <AiOutlinePhone
          className={showPhone ? "phone-icon phone-hidden" : "phone-icon"}
        />
        <div
          className={showPhone ? "phone-number" : "phone-number phone-hidden"}
        >
          <h3>התקשרו אליי</h3>
          <a href="#contact">054-7370666</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
