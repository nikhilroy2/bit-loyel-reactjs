import React from "react";
import img from "../../images/banner-img/img.png";
import img1 from "../../images/banner-img/img1.png";
import img2 from "../../images/banner-img/img2.png";
import img3 from "../../images/banner-img/img3.png";
import img4 from "../../images/banner-img/img4.png";
import logo from "../../images/icon/image 7.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="banner_section">
      <div className="title">
        <h1 className="banner-title">XXX is</h1>
        <h2 className="banner-title1">XXXXXXXX Platform</h2>
      </div>
      <img className="banner-img" src={img} alt="" />
      <img className="banner-img1" src={img1} alt="" />
      <img className="banner-img2" src={img2} alt="" />
      <img className="banner-img3" src={img3} alt="" />
      <img className="banner-img4" src={img4} alt="" />
      <div className="whitelist">
        <div style={{ background: '#160734' }}>
          <p>
            The white list is already! <br /> open Check it now
          </p>
          <p className="wallet">
            <a href="#" style={{ fontSize: "20px" }}>
              Get Whitelisted
            </a>
            <img src={logo} alt="" />
          </p>
          <a className="condition" href="#">
            Our Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
