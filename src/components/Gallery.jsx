import React from "react";
import "./styles/Gallery.scss";
import { GrGallery } from "react-icons/gr";

const Gallery = () => {
  return (
    <div className="gallery-container" id="gallery">
      <div className="gallery-header">
        <GrGallery className="gallery-icon" />
        <h1>גלריה</h1>
      </div>

      <div className="gallery">
        <div className="gallery-item">
          <img
            src={require("../img/gallery/g-1.jpg")}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/gallery/g-2.jpg")}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/gallery/g-3.jpg")}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/gallery/g-4.jpg")}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/gallery/g-5.jpg")}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/gallery/g-13.jpg")}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/gallery/g-7.jpg")}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/gallery/g-8.jpg")}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/gallery/g-11.jpg")}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/gallery/g-16.jpg")}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/gallery/g-14.jpg")}
            alt=""
            className="gallery-image"
          />
        </div>
        <div className="gallery-item">
          <img
            src={require("../img/gallery/g-12.jpg")}
            alt=""
            className="gallery-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
