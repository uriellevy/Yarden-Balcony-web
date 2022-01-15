import React, { useState } from "react";
import "./styles/Testimonials.scss";
import { slider } from "../data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { BsFacebook, BsPersonCircle } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = slider.length;

  const nextHandler = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevHandler = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="tes-container" id="testimonials">
      <div className="tes-header">
        <BsFacebook className="tes-icon" />
        <h1 className="tes-title">לקוחות ממליצים</h1>
      </div>
      {slider.map((slide, idx) => (
        <div className={current === idx ? "tes-main" : "none"} key={slide.id}>
          <FaArrowAltCircleRight
            className="tes-icon-right"
            onClick={nextHandler}
          />
          <FaArrowAltCircleLeft
            className="tes-icon-left"
            onClick={prevHandler}
          />

          <div className="tes-main-top">
            <BsFacebook className="tes-main-icon" />
            <BsPersonCircle className="tes-main-person-icon" />
            <div className="tes-main-header">
              <div className="tes-main-name">{slide.name}</div>
              <div className="tes-main-date">{slide.date}</div>
            </div>
          </div>
          <div className="tes-main-bottom">
            <div className="bottom-top">
              <MdStars className="bottom-icon" />
              <h4 className="bottom-title">recommends</h4>
            </div>
            <div className="bottom-text">{slide.text}</div>
          </div>
        </div>
      ))}
      <div className="tes-dots">
        {slider.map((slide, idx) => (
          <GoPrimitiveDot
            key={idx}
            className={current === idx ? "dots dots-active" : "dots"}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
