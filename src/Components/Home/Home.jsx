import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Home.css";
import "./Home.scss";
import video from "../../Assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbAppsFilled } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  const [price, setPrice] = useState(1000);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay">
        <video src={video} muted autoPlay loop type="video.mp4"></video>
      </div>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid  ">
          <div className="destination input1">
            <label htmlFor="city">Search your destination:</label>

            <div className="input flex">
              <input type="text" placeholder="Enter name here...." />
              <GrLocation className="iconn" />
            </div>

            <div className="dateInput">
              <label htmlFor="date">Select your date:</label>

              <div className="input flex">
                <input type="date" />
              </div>
            </div>

            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max price:</label>
                <h3 className="total">${price}</h3>
              </div>
              <div className="input flex">
                <input
                  type="range"
                  max="5000"
                  min="1000"
                  value={price}
                  step={100}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="searchOptions">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-right" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <SiTripadvisor className="icon" />
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbAppsFilled className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
