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
          src={slide2} alt="Ratings"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3
            style={{
              fontSize: "3rem",
              color: "#fff",
              background: "#1d1d1d",
              margin: "0px",
            }}
          >
            2019-2021
          </h3>
          <p style={{ fontSize: "2rem", color: "#fff", background: "#4369B2" }}>
            View Countries with most reported cases
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://covid19.mathdro.id/api/og"
          alt="coin ratings"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3
            style={{
              fontSize: "3rem",
              color: "#fff",
              background: "#1d1d1d",
              margin: "0px",
            }}
          >
            Covid19 Global Statistics
          </h3>
          {/* <p style={{ fontSize: "2rem", color: "#fff", background: "#4369B2" }}>
            View Corona Virus track
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Slide;
