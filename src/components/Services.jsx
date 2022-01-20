import React from "react";
import "./styles/Services.scss";
import Carousel from "react-elastic-carousel";
import { RiKnifeLine } from "react-icons/ri";

const Services = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="services" id="services">
      <div className="services-header">
        <RiKnifeLine className="services-logo" />
        <h1 className="services-title">ההתמחויות שלי</h1>
      </div>
      <Carousel breakPoints={breakPoints}>
        <div className="card">
          <img
            src={require("../img/services/antricot.jpg")}
            alt=""
            className="services-image"
          />
          <h4>אנטריקוט</h4>
        </div>
        <div className="card">
          <img
            src={require("../img/services/asado.jpg")}
            alt=""
            className="services-image"
          />
          <h4>אסאדו</h4>
        </div>
        <div className="card">
          <img
            src={require("../img/services/back-ribs.jpg")}
            alt=""
            className="services-image"
          />
          <h4>בק ריבס</h4>
        </div>

        <div className="card">
          <img
            src={require("../img/services/cake.jpg")}
            alt=""
            className="services-image"
          />
          <h4>עוגת עראיס</h4>
        </div>
        <div className="card">
          <img
            src={require("../img/services/goose.jpg")}
            alt=""
            className="services-image"
          />
          <h4>חזה אווז</h4>
        </div>
        <div className="card">
          <img
            src={require("../img/services/bbq.jpg")}
            alt=""
            className="services-image"
          />
          <h4>BBQ</h4>
        </div>
        <div className="card">
          <img
            src={require("../img/services/picania.jpg")}
            alt=""
            className="services-image"
          />
          <h4>פיקאניה</h4>
        </div>
        <div className="card">
          <img
            src={require("../img/services/hamburger.jpg")}
            alt=""
            className="services-image"
          />
          <h4>המבורגר</h4>
        </div>
        <div className="card">
          <img
            src={require("../img/services/shawarma.jpg")}
            alt=""
            className="services-image"
          />
          <h4>שווארמה ביתית</h4>
        </div>
        <div className="card">
          <img
            src={require("../img/services/smoker-bge.jpg")}
            alt=""
            className="services-image"
          />
          <h4>Smoker BGE</h4>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
