import React from "react";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";

const Slide = () => (
  <div>
    <Carousel fade>
      <Carousel.Item>
        <img src={slide1} className="d-block w-100" alt="Market ratings" />
        <Carousel.Caption>
          <h3 style={{ fontSize: "4rem", color: "#fff" }}>Corona Virus</h3>
          <p style={{ fontSize: "4rem", color: "#fff" }}>
            The World's Most Adverse Pandemic
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.bloomberg.com/graphics/2020-coronavirus-cases-world-map/img/2020-coronavirus-cases-world-map-facebook.png?t=202011091543"
          alt="Ratings"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3
            style={{
              fontSize: "3rem",
              color: "#fff",
              background: "brown",
              margin: "0px",
            }}
          >
            2019-2021
          </h3>
          <p style={{ fontSize: "2rem", color: "#fff", background: "brown" }}>
            View Corona spread across World map
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slide2} alt="coin ratings" className="d-block w-100" />
        <Carousel.Caption>
          <h3
            style={{
              fontSize: "3rem",
              color: "#fff",
              background: "brown",
              margin: "0px",
            }}
          >
            Corona Spread
          </h3>
          <p style={{ fontSize: "2rem", color: "#fff", background: "brown" }}>
            View Corona Virus track
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Slide;
